import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import {weatherService} from '../app/service/weather.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,HttpModule
  ],
  providers: [weatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
