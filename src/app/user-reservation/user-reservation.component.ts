import { Component } from '@angular/core';
import { TicketService } from '../ticket.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-reservation',
  templateUrl: './user-reservation.component.html',
  styleUrls: ['./user-reservation.component.css']
})
export class UserReservationComponent {
  tickets:any[] = [];
  pastTickets:any[] =[];
  constructor(private ticketService : TicketService, private userService : UserService){}
  ngOnInit(){
   this.ticketService.tickets.subscribe(value => this.filterData(value));
  }

  filterData(tickets){
    const date = new Date();
    const today = date.toISOString().slice(0, 10);
    for(const ticket of tickets){
      if(ticket.schedulingDTO.startTime < today) this.pastTickets.push(ticket);
      else this.tickets.push(ticket)
    }
  }
}
