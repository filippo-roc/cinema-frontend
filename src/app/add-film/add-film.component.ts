import { Component } from '@angular/core';
import { FilmService } from '../film.service';
import { Film } from '../model/Film';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.css']
})
export class AddFilmComponent {
  title:string = "";
  description:string = "";
  constructor(private filmService: FilmService,private router: Router) {}

  addFilmHandler() {
    const nuovoFilm: Film = new Film(this.title,this.description); // Crea un nuovo film
    this.filmService.addFilm(nuovoFilm); // Aggiungi il film utilizzando il servizio
    this.router.navigate(["/catalogue"])

  }
}
