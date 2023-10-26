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
  constructor(public filmService: FilmService) {
    filmService.films.subscribe(value => this.films = value)

  }
}
