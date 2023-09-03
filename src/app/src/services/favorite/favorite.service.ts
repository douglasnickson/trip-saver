import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor() { }

  private favorites: any[] = [];

  addToFavorites(flight: any): void {
    if (!this.isFlightInFavorites(flight)) {
      this.favorites.push(flight);
      this.saveFavorites();
    }
  }

  removeFromFavorites(flight: any): void {
    const index = this.favorites.findIndex((f) => f.id === flight.id);
    if (index !== -1) {
      this.favorites.splice(index, 1);
      this.saveFavorites();
    }
  }

  getFavorites(): any[] {
    return this.favorites;
  }

  private saveFavorites(): void {
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  loadFavorites(): void {
    const favoritesData = localStorage.getItem('favorites');
    if (favoritesData) {
      this.favorites = JSON.parse(favoritesData);
    }
  }

  isFlightInFavorites(flight: any): boolean {
    return this.favorites.some((f) => f.id === flight.id);
  }
}
