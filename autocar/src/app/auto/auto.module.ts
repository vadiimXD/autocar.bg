import { NgModule, createComponent } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ModelsDirective } from './models.directive';
import { HttpClientModule } from '@angular/common/http';
import { CitiesDirective } from './cities.directive';



@NgModule({
  declarations: [
    CreateComponent,
    ModelsDirective,
    CitiesDirective
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
