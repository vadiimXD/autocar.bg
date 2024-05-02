import { Component, OnInit } from '@angular/core';
import { AutoService } from '../auto.service';

@Component({
  selector: 'app-create-three',
  templateUrl: './create-three.component.html',
  styleUrls: ['./create-three.component.css']
})
export class CreateThreeComponent  implements OnInit{
  constructor(public autoService: AutoService){}

  ngOnInit(): void {
    this.autoService.fileName = "Изберете снимки на вашия автомобил"
  }
}
