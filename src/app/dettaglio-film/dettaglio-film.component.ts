import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';
import { HttpClient } from '@angular/common/http';
import { Film } from '../model/Film';

interface Movie {
  title: string;
  description: string;
}

@Component({
  selector: 'app-dettaglio-film',
  templateUrl: './dettaglio-film.component.html',
  styleUrls: ['./dettaglio-film.component.css']
})
export class DettaglioFilmComponent implements OnInit {
  
 
 

  selectedMovie: Film | undefined; 

  constructor(private filmService: FilmService, private http: HttpClient) {
   
    this.selectedMovie = this.filmService.getFilms()[0]; 

  }
  ngOnInit(): void {
     
  }
  
  

}
