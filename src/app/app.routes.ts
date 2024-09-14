import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component'; 
import { SignInComponent } from './Pages/sign-in/sign-in.component';
import { SignOutComponent } from './Pages/sign-out/sign-out.component';
import { SignUpComponent } from './Pages/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './Pages/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './Pages/reset-password/reset-password.component';
import { AdminOverviewComponent } from './Pages/admin-overview/admin-overview.component';
import { VmDetailsComponent } from './Pages/vm-details/vm-details.component';
import { ManageUsersComponent } from './Pages/manage-users/manage-users.component';
import { UserDetailsComponent } from './Pages/user-details/user-details.component';
import { PaymentPageComponent } from './Pages/payment-page/payment-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },  
  { path: 'home', component: HomeComponent },  
  { path: 'sign-in', component: SignInComponent },  
  { path: 'sign-out', component: SignOutComponent },   
  { path: 'sign-up', component: SignUpComponent },  
  { path: 'forgot-password', component: ForgotPasswordComponent },  
  { path: 'reset-password', component: ResetPasswordComponent },  
  { path: 'admin-overview', component: AdminOverviewComponent },  
  { path: 'vm-details', component: VmDetailsComponent },  
  { path: 'manager-users', component: ManageUsersComponent },  
  { path: 'user-details', component: UserDetailsComponent },  
  { path: 'payments-page', component: PaymentPageComponent },  
];
