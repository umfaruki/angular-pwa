import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuardService} from './auth-guard.service';
import {VerifyLoginAuthGuardService} from './verify-login-auth-guard.service';


const routes: Routes = [
  { path: '', redirectTo: 'feature', pathMatch: 'full'},
  { path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule), canActivate: [VerifyLoginAuthGuardService]},
  { path: 'feature',
    loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule), canActivate: [AuthGuardService]},
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
