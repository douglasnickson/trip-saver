import { Component, Input, OnInit } from '@angular/core';
import { Flight } from '../flight-results/flight.results.model';
import { Hotel } from '../hotel-details/hotel-details.model';
import { Offer } from './offer.model';
import { HotelSearchService } from 'src/app/src/services/hotel-search/hotel-search.service';
import { FlightSearchService } from 'src/app/src/services/flight-search/flight-search.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {
  @Input() flights!: Flight[]; // Lista de voos consultados
  bestOffer: Offer | null = null;

  constructor(private flightService: FlightSearchService, private hotelService: HotelSearchService) { }

  ngOnInit() {
    this.getBestOffer();
  }

  getBestOffer() {
    if (this.flights && this.flights.length > 0) {
      // Etapa 1: Encontrar o voo mais barato na lista de voos consultados
      const cheapestFlight = this.findCheapestFlight(this.flights);

      if (cheapestFlight) {
        // Etapa 2: Obter a cidade de destino do voo mais barato
        const destinationCity = cheapestFlight.destination;

        // Etapa 3: Encontrar a lista de hotéis na cidade de destino
        // Você deve implementar o método findHotelsByCity para buscar hotéis por cidade
        this.flightService.searchAirports(destinationCity).subscribe((airports) => {
          if (airports && airports.length > 0) {
            const destinationCity = airports[0].city;
            this.hotelService.getHotelsByCity(destinationCity)
              .subscribe((hotels) => {
                if (hotels && hotels.length > 0) {
                  // Etapa 4: Encontrar o hotel mais barato na cidade de destino
                  const cheapestHotel = this.findCheapestHotel(hotels);

                  if (cheapestHotel) {
                    // Etapa 5: Calcular o preço total em Reais e Milhas
                    const totalPriceInReais = cheapestFlight.priceMoney + cheapestHotel.priceMoney;
                    const totalPriceInMiles = cheapestFlight.priceMiles + cheapestHotel.priceMiles;

                    // Etapa 6: Montar o objeto Offer
                    this.bestOffer = {
                      flight: cheapestFlight,
                      hotel: cheapestHotel,
                      totalPriceInReais,
                      totalPriceInMiles
                    };
                  }
                }
              });
          }
        });
      }
    }
  }

  // Função para encontrar o voo mais barato na lista de voos
  findCheapestFlight(flights: Flight[]): Flight | null {
    let cheapestFlight: Flight | null = null;
    let cheapestPrice = Number.MAX_VALUE;

    for (const flight of flights) {
      if (flight.priceMoney < cheapestPrice) {
        cheapestFlight = flight;
        cheapestPrice = flight.priceMoney;
      }
    }

    return cheapestFlight;
  }

  // Função para encontrar o hotel mais barato na lista de hotéis
  findCheapestHotel(hotels: Hotel[]): Hotel | null {
    let cheapestHotel: Hotel | null = null;
    let cheapestPrice = Number.MAX_VALUE;

    for (const hotel of hotels) {
      if (hotel.priceMoney < cheapestPrice) {
        cheapestHotel = hotel;
        cheapestPrice = hotel.priceMoney;
      }
    }

    return cheapestHotel;
  }
}
