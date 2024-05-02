import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
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

   public fileName: string = ""

  eventsQ: any = []
  constructor(private http: HttpClient, private router: Router) { }

  createHandlerMain(createFormMain: NgForm): void {
    console.log(createFormMain)
    console.log(createFormMain.invalid, " invalid")
    console.log(createFormMain.value)


    this.router.navigate(['/create/extras']);

  }

  
  createHandlerExtras(createFormExtras: NgForm): void {
    console.log(createFormExtras)
    console.log(createFormExtras.invalid, " invalid")
    console.log(createFormExtras.value)


    this.router.navigate(['/create/photos']);

  }

  changeLabelName(e: any) {

    if (e.target.files.length == 1) this.fileName = `Вие имате ${e.target.files.length} избранa снимкa!`

    if (e.target.files.length != 1) this.fileName = `Вие имате ${e.target.files.length} избрани снимки!`

    // const reader = new FileReader()
    // console.log(e.target.files[0], "file")
    // const url = reader.readAsDataURL(e.target.files[0])
    // console.log(url, "file from reader")

    // reader.onload = (events: any) => {
    //   console.log(events.target.result, "result")
    // }
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
