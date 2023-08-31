export interface Flight {
  id: number;
  flightNumber: string;
  origin: string;
  destination: string;
  departureTime: string;
  arrivalTime: string; // Nova informação
  stops: Stop[]; // Nova informação
  stopDuration: string; // Nova informação
  duration: string;
  priceMiles: number;
  priceMoney: number;
}

export interface Stop {
  city: string;
  duration: string;
}
