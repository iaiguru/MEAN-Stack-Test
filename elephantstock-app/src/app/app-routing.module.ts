import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserCreateComponent } from './components/user-create/user-create.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserListComponent } from './components/user-list/user-list.component';

import { from } from 'rxjs';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'users-list' },
  { path: 'create-user', component: UserCreateComponent },
  { path: 'edit-user/:id', component: UserEditComponent },
  { path: 'users-list', component: UserListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
