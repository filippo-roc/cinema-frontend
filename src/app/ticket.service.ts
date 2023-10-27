import { Injectable } from '@angular/core';
import { Ticket } from './model/Ticket';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private apiUrl = "http://localhost:8080/api/v1/";

  constructor(private http: HttpClient) {
    
   }

  createTicket(email, schedulingId, token){
    console.log(email, schedulingId, token)
    return this.http.post(`${this.apiUrl}newTicket`, {email, schedulingId, token});
  }
  getTickets(email){
    return this.http.get(`${this.apiUrl}`)
  }
}
