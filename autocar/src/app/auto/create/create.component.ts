import { Component, OnDestroy, OnInit } from '@angular/core';
import { AutoService } from '../auto.service';
import { Model } from 'src/types/Auto';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit, OnDestroy {
  models: string[] = []
  eventsQ: any[] = []
  constructor(public autoService: AutoService) { }

  ngOnInit(): void {
    let event = this.autoService.modelsInfo$.subscribe((data: string[]) => {
      this.models = data
    })

    this.eventsQ.push(event)
  }

  ngOnDestroy(): void {
    this.eventsQ.forEach((event: any) => {
      event.unsubscribe()
    });
  }
}
