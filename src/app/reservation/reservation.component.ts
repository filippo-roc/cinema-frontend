import { Component } from '@angular/core';
import { FilmService } from '../film.service';
import { SchedulingService } from '../scheduling.service';
import { ActivatedRoute } from '@angular/router';
import { PrenotationService } from '../prenotation.service';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {
  title:string = "";
  schedulings: any[] = [];
  constructor(private route: ActivatedRoute, public filmService:FilmService, public schedulingService:SchedulingService, public prenotationService : PrenotationService){

  }
  
  ngOnInit(){
    const filmId = this.route.snapshot.params['filmId'];
    this.schedulingService.fetchSchedulingByFilmId(filmId);
    this.schedulingService.schedulings.subscribe(value => this.schedulings = value);
    console.log(this.schedulings)
  }
  prenotation(scheduling){
    console.log(scheduling)
  }
}
