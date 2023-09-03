import { Component, Input } from '@angular/core';
import { Flight } from './flight.results.model';
import { FavoriteService } from 'src/app/src/services/favorite/favorite.service';

@Component({
  selector: 'app-flight-results',
  templateUrl: './flight-results.component.html',
  styleUrls: ['./flight-results.component.scss']
})
export class FlightResultsComponent {
  @Input() flights: Flight[] = [];

  showModal: boolean = false;
  selectedFlight!: Flight;

  constructor(public favoriteService: FavoriteService) { }

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

  toggleFavorite(flight: any): void {
    if (this.isFavorite(flight)) {
      this.favoriteService.removeFromFavorites(flight);
    } else {
      this.favoriteService.addToFavorites(flight);
    }
  }

  isFavorite(flight: any): boolean {
    return this.favoriteService.isFlightInFavorites(flight);
  }
}
