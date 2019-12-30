import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';

import {ReactiveFormsModule} from '@angular/forms';
import {SessionStorageService} from '../services/session-storage.service';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule

  ],
  providers: [SessionStorageService]
})
export class LoginModule { }
