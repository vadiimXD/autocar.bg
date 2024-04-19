import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AutoService {

  constructor() { }

  createHandler(createForm:NgForm): void {
console.log(createForm)
console.log(createForm.invalid, " invalid")
console.log(createForm.value)
  }
}
