import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { AutoService } from './auto.service';

@Directive({
  selector: '[appCities]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: CitiesDirective,
    multi: true
  }]
})

export class CitiesDirective {

  constructor(private autoService: AutoService) {
  }

  validate(control: AbstractControl<any, any>): void {
    if (!control.value) {
      return
    }
    console.log(control.value, "from dir")
    this.autoService.getCities(control.value)
    return

  }


}
