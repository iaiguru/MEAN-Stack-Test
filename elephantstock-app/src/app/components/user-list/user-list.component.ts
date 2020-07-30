import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users: any = [];

  constructor(private apiService: ApiService) {
    this.fetchAllUsers();
  }

  ngOnInit(): void {}

  fetchAllUsers() {
    this.apiService.getUsers().subscribe((data) => {
      this.users = data.users;
      console.log(this.users);
    });
  }

  removeUser(user, index) {
    if (window.confirm('Are you sure?')) {
      this.apiService.deleteUser(user._id).subscribe((data) => {
        this.users.splice(index, 1);
      });
    }
  }
}
