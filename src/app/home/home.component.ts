import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  isHovered: boolean = false;
  
  constructor(private router: Router){

  }
  onMouseOver() {
    this.isHovered = true;
  }

  onMouseOut() {
    this.isHovered = false;
  }
  onClickHandler(){
    this.router.navigate(["/catalogue"])
  }
}
