import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  trabalho: Observable<any>;

  constructor(private dashboardService: DashboardService) {
   }

  ngOnInit() {
    this.trabalho =  this.dashboardService.getAll();
    console.log('Dados', this.trabalho);
  }

}
