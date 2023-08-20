import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flight } from '../../app/components/flight-results/flight.results.model';

@Injectable({
  providedIn: 'root'
})
export class FlightSearchService {
  private baseUrl = 'http://localhost:3000'; // Altere para o URL correto

  constructor(private http: HttpClient) { }

  searchAirports(query: string): Observable<any[]> {
    const url = `${this.baseUrl}/airports`; // Atualize conforme sua estrutura
    return this.http.get<any[]>(`${url}?_sort=name&_order=asc&q=${query}`);
  }

  searchFlights(searchParams: any): Observable<Flight[]> {
    const url = `${this.baseUrl}/flights`; // Atualize conforme sua estrutura
    return this.http.get<[]>(url, { params: searchParams });
  }
}
