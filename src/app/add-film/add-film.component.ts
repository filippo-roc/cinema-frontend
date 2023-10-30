import { Component } from '@angular/core';
import { FilmService } from '../film.service';
import { Film } from '../model/Film';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.css']
})
export class AddFilmComponent {
  imageURL: string = '';
  title:string = "";
  description:string = "";
  actors!: string;
  duration!: string;
  year!: string;
  price!: number;
  category!: string;
  categories: { name: string }[] = [];

  constructor(private filmService: FilmService,private router: Router, private http: HttpClient) {
    this.getCategories();
  }

  addFilmHandler() {
    const nuovoFilm: Film = new Film(this.title,this.description,this.imageURL, this.actors, this.duration, this.year, this.price, this.category); 
    this.filmService.addFilm(nuovoFilm); 
    this.router.navigate(["/catalogue"])
  }

  getCategories() {
    this.http.get<any>('http://localhost:8080/api/v1/categories').subscribe(data => {
    
      this.categories = data; 
    });
  }
  
}
