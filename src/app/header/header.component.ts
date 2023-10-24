import { Component } from '@angular/core';
import { MyAuthService } from '../my-auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLoggedIn :boolean = false;
  constructor(private myAuthService: MyAuthService) {
    this.myAuthService.getIsLoggedIn().subscribe((value)=>{
      this.isLoggedIn = value;
    })
  }
  
}
