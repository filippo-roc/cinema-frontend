// film.service.ts
import { Injectable } from '@angular/core';
import { Film } from './model/Film';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  private apiUrl = "http://localhost:8080/api/v1/";
  
  private selectedFilm: Film;

  films: BehaviorSubject<Film[]> = new BehaviorSubject([]); 

   constructor(private http: HttpClient){
   }
   
  async fetchFilms(){
    try{
      const result:any = await lastValueFrom(this.getFilms());
      console.log(result)
      this.films.next(result)
    }catch(err){

    }
   }
   setSelectedFilm(selectedFilm){
    this.selectedFilm = selectedFilm;
   }
   getSelectedFilm(){
    return this.selectedFilm;
   }
  getFilms() {
    return this.http.get(`${this.apiUrl}films`);
  }
  addFilm(newFilm){

  }
  // Altri metodi per la gestione dei film

 
}