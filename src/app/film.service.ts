// film.service.ts
import { Injectable } from '@angular/core';
import { Film } from './model/Film';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  private films: Film[] = [
    new Film("Film 1","Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dignissimos optio praesentium. Optio id beatae iure atque ex sit odit." ),
    new Film("Film 2","Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dignissimos optio praesentium. Optio id beatae iure atque ex sit odit." ),
    new Film("Film 3","Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dignissimos optio praesentium. Optio id beatae iure atque ex sit odit." )
   ]; // Inizializza con un array vuoto

  getFilms(): Film[] {
    return this.films;
  }

  addFilm(newFilm: Film) {
    this.films.push(newFilm);
  }

  // Altri metodi per la gestione dei film
}