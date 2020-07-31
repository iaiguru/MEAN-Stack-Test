import { Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss'],
})
export class UserCreateComponent implements OnInit {
  submitted = false;
  userForm: FormGroup;
  userRoles: any = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService,
    private spinner: NgxSpinnerService,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {
    this.mainForm();
    this.getRoles();
  }

  mainForm() {
    this.userForm = this.fb.group({
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

  updateRole(e) {
    this.userForm.get('role').setValue(e, { onlySelf: true });
  }

  get myForm() {
    return this.userForm.controls;
  }

  getRoles() {
    this.apiService.getRoles(null).subscribe((data) => {
      this.userRoles = data.roles;
    });
  }

  onSubmit() {
    this.submitted = true;
    if (!this.userForm.valid) {
      return false;
    } else {
      // Call user create api
      this.spinner.show();
      this.apiService.createUser(this.userForm.value).subscribe(
        (res) => {
          this.spinner.hide();
          this.ngZone.run(() => this.router.navigateByUrl('/user-list'));
        },
        (error) => {
          this.spinner.hide();
          this.toast.error(error);
        }
      );
    }
  }
}
