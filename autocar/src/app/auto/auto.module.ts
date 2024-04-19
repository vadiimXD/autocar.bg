import { NgModule, createComponent } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';



@NgModule({
  declarations: [
    CreateComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CreateComponent]
})
export class AutoModule { }
