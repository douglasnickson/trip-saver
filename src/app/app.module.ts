import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FlightSearchComponent } from './src/app/components/flight-search/flight-search.component';
import { FlightResultsComponent } from './src/app/components/flight-results/flight-results.component';
import { FlightDetailsComponent } from './src/app/components/flight-details/flight-details.component';
import { MainComponent } from './src/app/pages/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightSearchComponent,
    FlightResultsComponent,
    FlightDetailsComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
