import { Component, Input } from '@angular/core';
import { Flight } from './flight.results.model';

@Component({
  selector: 'app-flight-results',
  templateUrl: './flight-results.component.html',
  styleUrls: ['./flight-results.component.scss']
})
export class FlightResultsComponent {
  @Input() flights: Flight[] = [];

  showModal: boolean = false;
  selectedFlight!: Flight;

  openModal(flight: Flight) {
    this.selectedFlight = flight;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.selectedFlight = {} as Flight;
  }

  calculateMostAdvantageousOption(flight: any): string {
    const conversionRate = 20;

    const totalInReais = flight.priceMiles * conversionRate;

    if (flight.priceMoney < totalInReais) {
      return 'Reais é mais vantajoso';
    } else if (flight.priceMoney > totalInReais) {
      return 'Milhas é mais vantajoso';
    } else {
      return 'Valores iguais';
    }
  }
}
