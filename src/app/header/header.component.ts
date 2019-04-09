import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core//auth/auth.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from 'firebase';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  private user$ = new BehaviorSubject<User>(null);;

  constructor(private authService:  AuthService) {
    authService.currentUser.subscribe(_user => {
      this.user$.next(_user);
    });
  }

  ngOnInit() {
  }

}
