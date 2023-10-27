import { Injectable } from '@angular/core';
import { Ticket } from './model/Ticket';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private apiUrl = "http://localhost:8080/api/v1/";
  tickets: BehaviorSubject<any[]> = new BehaviorSubject([]); 

  constructor(private http: HttpClient) {
    
   }

   async fetchTickets(token){
    try{
      const result:any = await lastValueFrom(this.getTickets(token));
      this.tickets.next(result)
    }catch(err){
      console.log(err);
    }
   }
  createTicket(email, schedulingId, token){
    return this.http.post(`${this.apiUrl}newTicket`, {email, schedulingId, token});
  }

  getTickets(token){
    return this.http.get(`${this.apiUrl}:token=${token}`)
  }
}
