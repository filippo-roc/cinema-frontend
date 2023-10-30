import { Component } from '@angular/core';
import { FilmService } from './film.service';
import { TicketService } from './ticket.service';
import { MyAuthService } from './my-auth-service.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PROGETTO-CINEMA';
  constructor(private filmService : FilmService, private ticketsService: TicketService, private myAuthService: MyAuthService, private userService : UserService){
    this.fetchData()
  }
  fetchData(){
    // fetch films
    this.filmService.fetchFilms();
    // if the user is logged , get their tickets
    this.myAuthService.getIsLoggedIn().subscribe((value) =>{
      if(value) this.ticketsService.fetchTickets(this.userService.user.token)
    })

    this.ticketsService.addedTicket.subscribe(value =>{
      if(value) {
        this.ticketsService.fetchTickets(this.userService.user.token)
        this.ticketsService.addedTicket.next(false);
      }
    })
  }
}
