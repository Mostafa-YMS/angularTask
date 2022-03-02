import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SingleUserComponent } from './single-user/single-user.component';
import { UsersComponent } from './users/users.component';
import { RemoveUserComponent } from './remove-user/remove-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user/:id', component: SingleUserComponent },
  { path: 'users', component: UsersComponent },
  { path: 'remove', component: RemoveUserComponent },
  { path: 'update', component: UpdateUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
