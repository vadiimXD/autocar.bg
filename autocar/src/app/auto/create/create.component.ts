import { Component } from '@angular/core';
import { AutoService } from '../auto.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  constructor(public autoService: AutoService) { }
}
