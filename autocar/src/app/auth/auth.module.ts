import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CheckDirective } from './check.directive';
import { EmailDirective } from './email.directive';



@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    CheckDirective,
    EmailDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,

  ],
  exports: [RegisterComponent, LoginComponent]
})
export class AuthModule { }
