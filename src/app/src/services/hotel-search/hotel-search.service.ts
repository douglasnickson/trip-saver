import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotel } from '../../app/components/hotel-details/hotel-details.model';

@Injectable({
  providedIn: 'root'
})
export class HotelSearchService {

  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getHotelsByCity(city: string): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(`${this.baseUrl}/hotels?city=${city}`);
  }
}
