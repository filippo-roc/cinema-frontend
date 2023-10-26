// film.service.ts
import { Injectable } from '@angular/core';
import { Film } from './model/Film';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  
  
  selectedFilm: any;
  private films: Film[] = [
    new Film("Film 3", "Descrizione del Film 3", "https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg", "Attori", "Durata", "Anno", 10, "Categoria")

      ]; // Inizializza con un array vuoto

  getFilms(): Film[] {
    return this.films;
  }

  addFilm(newFilm: Film) {
    this.films.push(newFilm);
  }

  // Altri metodi per la gestione dei film

 
}