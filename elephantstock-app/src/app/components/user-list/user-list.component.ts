import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users: any = [];
  filterForm: FormGroup;
  roles: string[] = [];
  keyword = '';
  role = 'All';

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private spinner: NgxSpinnerService,
    private toaster: ToastrService
  ) {}

  ngOnInit(): void {
    this.getAllRoles();
    this.searchUsers(this.role, '');
    this.setForm();
  }

  onSearch(event: any) {
    this.keyword = this.filterForm.get('keyword').value;
    this.searchUsers(this.role, this.keyword);
  }

  setForm() {
    this.filterForm = this.fb.group({
      role: ['All'],
      keyword: [''],
    });
  }

  updateRole(e) {
    this.role = e;
    this.filterForm.get('role').setValue(e, { onlySelf: true });

    this.searchUsers(this.role, this.keyword);
  }

  onKeywordChanged(event: any) {
    this.keyword = event.target.value;
  }

  getAllRoles() {
    this.apiService.getAllRoles().subscribe((data) => {
      const roles = data.roles;
      roles.unshift('All');

      this.roles = roles;
    });
  }

  searchUsers(role, keyword) {
    this.spinner.show();
    this.apiService.searchUsers(role, keyword).subscribe(
      (data) => {
        this.spinner.hide();
        this.users = data.users;
      },
      (error) => {
        this.spinner.hide();
        this.toaster.error(error);
      }
    );
  }

  removeUser(user, index) {
    if (window.confirm('Are you sure?')) {
      this.spinner.show();
      this.apiService.deleteUser(user._id).subscribe(
        (data) => {
          this.users.splice(index, 1);
          this.spinner.hide();
        },
        (error) => {
          this.spinner.hide();
          this.toaster.error(error);
        }
      );
    }
  }
}
