import { Component } from '@angular/core';
import { Film } from '../model/Film';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent {
  films: Film[];
  constructor(private filmService: FilmService) {
    this.filmService.films.subscribe(value => this.films = value)

  }
}
