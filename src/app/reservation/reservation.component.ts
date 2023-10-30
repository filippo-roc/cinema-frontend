import { Component } from '@angular/core';
import { FilmService } from '../film.service';
import { SchedulingService } from '../scheduling.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { TicketService } from '../ticket.service';
import { UserService } from '../user.service';
import { Ticket } from '../model/Ticket';
import { lastValueFrom } from 'rxjs';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {
  title: string = "";
  schedulings: any[] = [];
  isSelected: any[] = []
  activateModal = false;
  selectedScheduling = null;
  constructor(private router: Router, private route: ActivatedRoute, public filmService: FilmService, public schedulingService: SchedulingService, public ticketService: TicketService, public userService: UserService) {

  }

  ngOnInit() {
    const filmId = this.route.snapshot.params['filmId'];
    this.schedulingService.fetchSchedulingByFilmId(filmId);
    this.schedulingService.schedulings.subscribe(value => {
      this.schedulings = value;
      this.isSelected = Array(this.schedulings.length).fill(false)
    });
    console.log(this.schedulings)
  }
  
  
  async prenotation(event) {
    if (!event) {
      this.selectedScheduling = null;
      this.activateModal = false;
      this.isSelected = this.isSelected.map(value => false);
      return
    }
    const scheduling = this.selectedScheduling;
    try {
      // data
      const email = this.userService.user.email;
      const schedulingId = scheduling.schedulingId;
      const token = this.userService.user.token;
      const price = scheduling.filmDTO.price + scheduling.hallDTO.price;
      // htttp request to the server
      const result = await lastValueFrom(this.ticketService.createTicket(email, schedulingId, token))
      // go to reservation
      this.router.navigate(["/user-reservation"])
    } catch (err) {
      console.log(err);
    }
  }


  clickHandler(index, scheduling) {
    this.isSelected[index] = true;
    this.activateModal = true;
    this.selectedScheduling = scheduling;
  }
}
