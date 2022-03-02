import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SingleUserComponent } from './single-user/single-user.component';
import { UsersComponent } from './users/users.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { AuthGuard } from './auth.guard';
import { LoginGuard } from './login.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', canActivate: [LoginGuard], component: LoginComponent },
  { path: 'register', canActivate: [LoginGuard], component: RegisterComponent },
  {
    path: 'user/:id',
    canActivate: [AuthGuard],
    component: SingleUserComponent,
  },
  { path: 'users', canActivate: [AuthGuard], component: UsersComponent },
  {
    path: 'update/:id',
    canActivate: [AuthGuard],
    component: UpdateUserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
