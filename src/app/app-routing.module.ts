import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path : 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {
    useHash: false,
    enableTracing: false,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
