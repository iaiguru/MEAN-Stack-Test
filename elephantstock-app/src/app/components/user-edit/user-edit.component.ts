import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../model/user';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  user: User;
  roles: any = ['Artist', 'Designer', 'Art manager'];

  constructor(
    private fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private toaster: ToastrService
  ) {}

  ngOnInit(): void {
    this.setForm();
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.getUser(id);
    this.getRoles(id);
  }

  setForm() {
    this.editForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      role: ['', [Validators.required]],
    });
  }

  get myForm() {
    return this.editForm.controls;
  }

  updateRole(e) {
    this.editForm.get('role').setValue(e, { onlySelf: true });
  }

  getRoles(id) {
    this.apiService.getRoles(id).subscribe((data) => {
      this.roles = data.roles;
    });
  }

  getUser(id) {
    this.spinner.show();
    this.apiService.getUser(id).subscribe(
      (data) => {
        this.spinner.hide();
        const { firstName, lastName, email, role } = data.user;
        this.editForm.setValue({
          firstName,
          lastName,
          email,
          role,
        });
      },
      (error) => {
        console.log('Error:', error);
        this.spinner.hide();
        this.toaster.error(error);
      }
    );
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure')) {
        const id = this.actRoute.snapshot.paramMap.get('id');
        const user = this.editForm.value;

        this.spinner.show();
        this.apiService.updateUser(id, user).subscribe(
          (res) => {
            this.spinner.hide();
            this.router.navigateByUrl('/user-list');
          },
          (error) => {
            this.spinner.hide();
            this.toaster.error(error);
          }
        );
      }
    }
  }
}
