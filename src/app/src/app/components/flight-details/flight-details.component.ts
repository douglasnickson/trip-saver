import { Component, Input } from '@angular/core';
import { Flight } from '../flight-results/flight.results.model';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.scss']
})
export class FlightDetailsComponent {
  @Input()
  flight!: Flight;
}
