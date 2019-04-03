import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core//auth/auth.service';
import { Observable } from 'rxjs';
import { User } from 'firebase';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  constructor(private authService:  AuthService) { 
  }

  ngOnInit() {
  }

}
