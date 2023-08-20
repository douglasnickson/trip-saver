import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FlightSearchService } from 'src/app/src/services/flight-search/flight-search.service';
import { Flight } from 'src/app/src/app/components/flight-results/flight.results.model';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss']
})
export class FlightSearchComponent {

  @Output() flights: EventEmitter<Flight[]> = new EventEmitter<Flight[]>();

  searchForm: FormGroup;
  originOptions = [];
  destinationOptions = [];

  placeholderOrigen = 'Selecione a origem';
  placeholderDestination = 'Selecione o destino';

  constructor(private formBuilder: FormBuilder, private flightSearchService: FlightSearchService) {
    this.searchForm = this.formBuilder.group({
      origin: '',
      destination: '',
      departureDate: null,
      returnDate: null,
      tripType: 'roundTrip',
      paymentType: 'miles',
      travelers: 1
    });
  }

  onOriginSearch(term: string) {
    if (term.length >= 3) {
      this.flightSearchService.searchAirports(term).subscribe((data: any) => {
        this.originOptions = data;
        this.placeholderOrigen = data == '' ? 'Selecione a origem' : '';
      });
    }
  }

  onDestinationSearch(term: string) {
    if (term.length >= 3) {
      this.flightSearchService.searchAirports(term).subscribe((data: any) => {
        this.destinationOptions = data;
        this.placeholderDestination = data == '' ? 'Selecione o destino' : '';
      });
    }
  }

  onSubmit() {
    const searchParams = {
      origin: this.searchForm.value.origin.code,
      destination: this.searchForm.value.destination.code,
    };

    this.flightSearchService.searchFlights(searchParams).subscribe(
      (data: any) => {
        this.flights.emit(data);
      },
      (error: any) => {
        console.error('Erro ao buscar voos:', error);
      }
    );
  }
}
