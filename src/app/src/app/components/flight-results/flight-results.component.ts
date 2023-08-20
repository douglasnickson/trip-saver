import { Component, Input } from '@angular/core';
import { Flight } from './flight.results.model';

@Component({
  selector: 'app-flight-results',
  templateUrl: './flight-results.component.html',
  styleUrls: ['./flight-results.component.scss']
})
export class FlightResultsComponent {
  @Input() flights: Flight[] = [];
}
