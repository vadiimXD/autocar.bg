import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { PublicModule } from './public/public.module';
import { HttpClientModule } from "@angular/common/http"
import { GlobalInterceptor } from './global.interceptor';
import { FormsModule } from '@angular/forms';
import { AutoModule } from './auto/auto.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    CoreModule,
    SharedModule,
    AutoModule,
    PublicModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [GlobalInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }
