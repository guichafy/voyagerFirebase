import { Component, OnInit } from '@angular/core';
import { User } from 'firebase';
import { BehaviorSubject } from 'rxjs';
import { AuthenticationService } from '../core/authentication/authentication.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  private user$ = new BehaviorSubject<User>(null);;

  constructor(private authService:  AuthenticationService) {
    authService.currentUser.subscribe(_user => {
      this.user$.next(_user);
    });
  }

  ngOnInit() {
  }

}
