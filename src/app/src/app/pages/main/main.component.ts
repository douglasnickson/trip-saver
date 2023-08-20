import { Component } from '@angular/core';
import { Flight } from '../../components/flight-results/flight.results.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  flights: Flight[] = [];

  handleFlightsResults(flights: Flight[]) {
    this.flights = flights;
  }
}
