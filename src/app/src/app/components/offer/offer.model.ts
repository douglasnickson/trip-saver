import { Flight } from "../flight-results/flight.results.model";
import { Hotel } from "../hotel-details/hotel-details.model";

export interface Offer {
  flight: Flight;
  hotel: Hotel;
  totalPriceInReais: number;
  totalPriceInMiles: number;
}
