import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms'; // Importe o FormsModule

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FlightSearchComponent } from './src/app/components/flight-search/flight-search.component';
import { FlightResultsComponent } from './src/app/components/flight-results/flight-results.component';
import { FlightDetailsComponent } from './src/app/components/flight-details/flight-details.component';
import { MainComponent } from './src/app/pages/main/main.component';
import { FlightModalComponent } from './src/app/components/flight-modal/flight-modal.component';

import { FlightSearchService } from './src/services/flight-search/flight-search.service';
import { HotelDetailsComponent } from './src/app/components/hotel-details/hotel-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightSearchComponent,
    FlightResultsComponent,
    FlightDetailsComponent,
    MainComponent,
    FlightModalComponent,
    HotelDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgSelectModule,
    FormsModule
  ],
  providers: [FlightSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
