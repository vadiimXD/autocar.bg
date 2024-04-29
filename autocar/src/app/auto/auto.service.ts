import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Model } from 'src/types/Auto';
import { City } from 'src/types/City';

@Injectable({
  providedIn: 'root'
})

export class AutoService implements OnDestroy {
  private modelsInfo$$: any = new BehaviorSubject(null)
  public modelsInfo$ = this.modelsInfo$$.asObservable()

  private citiesInfo$$: any = new BehaviorSubject(null)
  public citiesInfo$ = this.citiesInfo$$.asObservable()

  eventsQ: any = []
  constructor(private http: HttpClient) { }

  createHandler(createForm: NgForm): void {
    console.log(createForm)
    console.log(createForm.invalid, " invalid")
    console.log(createForm.value)
  }

  generateModels(): void {

    console.log("generated")
    this.http.get<any>("http://localhost:1337/create/models", {}).subscribe()
  }

  getModels(brand: string) {
    const event = this.http.post<Model | false>("http://localhost:1337/get/models", { brand }, {}).subscribe(data => {
      if (!data) {
        this.modelsInfo$$.next(null)
        return

      }
      this.modelsInfo$$.next(data.models)
    })

    this.eventsQ.push(event)
  }

  getCities(area: string) {
    console.log("in")
    const event = this.http.post<City | false>("http://localhost:1337/get/cities", { area }, {}).subscribe(data => {
      console.log(data, "from service")
      if (!data) {
        this.citiesInfo$$.next(null)
        return

      }
      this.citiesInfo$$.next(data.cities)
    })

    this.eventsQ.push(event)

  }


  ngOnDestroy(): void {
    this.eventsQ.forEach((event: any) => {
      event.unsubscribe()
    });
  }

}
