import { Component, Input, OnInit } from '@angular/core';
import { Hotel } from './hotel-details.model';
import { Flight } from '../flight-results/flight.results.model';
import { HotelSearchService } from 'src/app/src/services/hotel-search/hotel-search.service';
import { FlightSearchService } from 'src/app/src/services/flight-search/flight-search.service';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.scss']
})
export class HotelDetailsComponent implements OnInit {
  @Input() flight!: Flight;

  hotels: Hotel[] = [];

  constructor(private hotelService: HotelSearchService, private flightService: FlightSearchService) { }

  ngOnInit(): void {
    this.loadHotels();
  }

  loadHotels(): void {
    if (this.flight) {
      this.flightService.searchAirports(this.flight.destination)
        .subscribe((airport) => {
          if (airport && airport.length > 0) {
            const destinationCity = airport[0].city;
            this.hotelService.getHotelsByCity(destinationCity)
              .subscribe((hotels) => {
                this.hotels = hotels;
              });
          }
        });
    }
  }
}
