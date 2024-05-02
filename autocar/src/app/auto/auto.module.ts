import { NgModule, createComponent } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ModelsDirective } from './models.directive';
import { HttpClientModule } from '@angular/common/http';
import { CitiesDirective } from './cities.directive';
import { CreateTwoComponent } from './create-two/create-two.component';
import { CreateThreeComponent } from './create-three/create-three.component';



@NgModule({
  declarations: [
    CreateComponent,
    ModelsDirective,
    CitiesDirective,
    CreateTwoComponent,
    CreateThreeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [CreateComponent]
})
export class AutoModule { }
