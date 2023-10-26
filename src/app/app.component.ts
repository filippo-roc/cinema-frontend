import { Component } from '@angular/core';
import { FilmService } from './film.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PROGETTO-CINEMA-ANGULAR';
  constructor(filmService : FilmService){
    filmService.fetchFilms();
  }
}
