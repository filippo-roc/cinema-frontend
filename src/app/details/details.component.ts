import { Component } from '@angular/core';
import { FilmService } from '../film.service';
import { Film } from '../model/Film';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  selectedFilm:Film = null;
  constructor(private filmService: FilmService){
    this.selectedFilm = this.filmService.getSelectedFilm();
  }
}
