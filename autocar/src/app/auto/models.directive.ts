import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors } from '@angular/forms';
import { AutoService } from './auto.service';

@Directive({
  selector: '[appModels]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ModelsDirective,
    multi: true
  }]
})

export class ModelsDirective {

  constructor(private autoService: AutoService) {
  }

  validate(control: AbstractControl<any, any>): void {
    if (!control.value) {
      return
    }
    this.autoService.getModels(control.value)
    return

  }


}
