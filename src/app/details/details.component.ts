import { Component } from '@angular/core';
import { FilmService } from '../film.service';
import { Film } from '../model/Film';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  selectedFilm:Film = null;
  constructor(private filmService: FilmService,private route: ActivatedRoute){}
  ngOnInit(){
    const filmId = this.route.snapshot.params['filmId'];
    this.filmService.getSelectedFilm(filmId); 
    this.filmService.selectedFilm.subscribe(value => this.selectedFilm = value)
  }
}
