import { Component, OnDestroy, OnInit } from '@angular/core';
import { AutoService } from '../auto.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit, OnDestroy {
  models: string[] = []
  cities: string[] = []
  eventsQ: any[] = []
  constructor(public autoService: AutoService) { }

  ngOnInit(): void {
    let event = this.autoService.modelsInfo$.subscribe((data: string[]) => {
      this.models = data
    })

    let event2 = this.autoService.citiesInfo$.subscribe((data: string[]) => {
      this.cities = data
    })

    this.autoService.fileName = "Изберете снимки на вашия автомобил"

    this.eventsQ.push(event)
    this.eventsQ.push(event2)
  }

  ngOnDestroy(): void {
    this.eventsQ.forEach((event: any) => {
      event.unsubscribe()
    });
  }
}
