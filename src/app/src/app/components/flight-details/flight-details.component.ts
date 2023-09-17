import { Component, Input, OnInit } from '@angular/core';
import { Flight } from '../flight-results/flight.results.model';
import { Hotel } from '../hotel-details/hotel-details.model';
import { HotelSearchService } from 'src/app/src/services/hotel-search/hotel-search.service';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.scss']
})
export class FlightDetailsComponent implements OnInit {
  @Input()
  flight!: Flight;

  hotels: Hotel[] = [];

  constructor(private hotelService: HotelSearchService) { }

  ngOnInit(): void {
    this.loadHotels();
  }

  loadHotels(): void {
    if (this.flight) {
      this.hotelService.getHotelsByCity(this.flight.destination)
        .subscribe((hotels) => {
          this.hotels = hotels;
        });
    }
  }
}
