import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { ConfirmCodeComponent } from './auth/confirm-code/confirm-code.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { AuthGuard } from './auth/auth.guard';
import { UnauthGuard } from './auth/unauth.guard';
import { ParkingComponent } from './parking/parking.component'
import { GetdetailsComponent } from './parking/getdetails/getdetails.component'
import { RegisterlocationComponent } from './parking/registerlocation/registerlocation.component'
import { AlertsComponent } from './alerts/alerts.component'
import { DevicealertsComponent } from './alerts/devicealerts/devicealerts.component'

const routes: Routes = [
  { path: 'auth', component: AuthComponent, children: [
    {  path: 'signin', component: SignInComponent, canActivate: [UnauthGuard] },
    {  path: 'signup', component: SignUpComponent, canActivate: [UnauthGuard] },
    {  path: 'confirm', component: ConfirmCodeComponent, canActivate: [UnauthGuard] },
    {  path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] }
   ]
  },
  { path: 'parking', component: ParkingComponent, children: [
    {  path: 'getdetails/:code', component: GetdetailsComponent, canActivate: [AuthGuard] },
    {  path: 'getall', component: GetdetailsComponent, canActivate: [AuthGuard] },
    {  path: 'registerlocation', component: RegisterlocationComponent, canActivate: [AuthGuard] }
   ]
  },
  { path: 'alerts', component: AlertsComponent, children: [
    {  path: 'devicealerts', component: DevicealertsComponent, canActivate: [AuthGuard] }
   ]
  },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
