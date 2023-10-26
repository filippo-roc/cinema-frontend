import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';


@Component({
  selector: 'app-add-scheduling',
  templateUrl: './add-scheduling.component.html',
  styleUrls: ['./add-scheduling.component.css']
})
export class AddSchedulingComponent {
 
  filmId: string = '';
  hallId: string = '';
  data: string = '';
  ora: string = '';

  
}
