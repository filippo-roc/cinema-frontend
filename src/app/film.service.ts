// film.service.ts
import { Injectable } from '@angular/core';
import { Film } from './model/Film';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilmService {


   selectedFilm: BehaviorSubject<Film> = new BehaviorSubject(null);
  private apiUrl = "http://localhost:8080/api/v1/";

  films: BehaviorSubject<Film[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient) {
  }

  async fetchFilms() {
    try {
      const result: any = await lastValueFrom(this.getFilms());
      console.log(result)
      this.films.next(result)
    } catch (err) {

    }
  }
  setSelectedFilm(selectedFilm) {
    this.selectedFilm = selectedFilm;
  }

  async getSelectedFilm(filmId) {
    try {
      const result: any = lastValueFrom(this.getFilm(filmId));
      this.selectedFilm.next(result);
    } catch (err) {
      console.log(err.message)
    }
  }

  getFilms() {
    return this.http.get(`${this.apiUrl}films`);
  }

  private getFilm(filmId) {
    return this.http.get(`${this.apiUrl}?filmId=${filmId}`)
  }

  addFilm(newFilm) {

  }
  // Altri metodi per la gestione dei film


}