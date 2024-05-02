import { Component } from '@angular/core';
import { AutoService } from '../auto.service';

@Component({
  selector: 'app-create-two',
  templateUrl: './create-two.component.html',
  styleUrls: ['./create-two.component.css']
})
export class CreateTwoComponent {
  constructor(public autoService: AutoService) { }
}
