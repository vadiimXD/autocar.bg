import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { CreateComponent } from './auto/create/create.component';
import { CreateTwoComponent } from './auto/create-two/create-two.component';
import { CreateThreeComponent } from './auto/create-three/create-three.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "create", component:  CreateComponent},
  { path: "create/extras", component:  CreateTwoComponent},
  { path: "create/photos", component:  CreateThreeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
