import { Component } from '@angular/core';
import { Film } from '../model/Film';
import { FilmService } from '../film.service';
import { UserService } from '../user.service';
import { MyAuthService } from '../my-auth-service.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent {
  films: Film[];
  isLogged = false;
  isOver = [];
  constructor(public filmService: FilmService, public myAuthService: MyAuthService) {
  }
  ngOnInit(){
    this.filmService.films.subscribe(value => {
      this.films = value
      this.isOver = Array(this.films.length).fill(false)
    })
    this.myAuthService.getIsLoggedIn().subscribe(value => this.isLogged = value);
  }
  showMessage(index){
    this.isOver[index] = true;
  }
  hideMessage(index){
    this.isOver[index] = false
  }
}
