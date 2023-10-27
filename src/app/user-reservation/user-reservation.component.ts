import { Component } from '@angular/core';
import { TicketService } from '../ticket.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-reservation',
  templateUrl: './user-reservation.component.html',
  styleUrls: ['./user-reservation.component.css']
})
export class UserReservationComponent {
  tickets:any[] = []
  constructor(private ticketService : TicketService, private userService : UserService){}
  getAllTickets(){
    
  }
}
