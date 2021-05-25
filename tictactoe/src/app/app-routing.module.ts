import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PlayComponent} from "./pages/play/play.component";
import {GuardGuard} from "./guards/guard.guard";
import {LoginComponent} from "./pages/login/login.component";

const routes: Routes = [
  {
    path: 'play',
    component: PlayComponent,
    pathMatch : 'full',
    canActivate: [GuardGuard]
  },{
    path: 'login',
    component: LoginComponent,
    pathMatch : 'full',
  }, {
    path : '',
    redirectTo: 'login',
    pathMatch: 'full'
  }, {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
