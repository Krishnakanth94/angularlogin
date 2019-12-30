import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {AuthService} from '../services/auth.service';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../components/home/home.component';
import {subRoutes} from '../layout/layout.routes';
import {AuthGuard} from '../guards/auth.guard';
import {HomeModule} from '../components/home/home.module';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

export const coreRoutes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: subRoutes,
    canActivate: [ AuthGuard ]
  }
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(coreRoutes),
    HomeModule,
    ReactiveFormsModule
  ],
  providers:[]
})
export class LoginModule { }
