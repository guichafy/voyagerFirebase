import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardService } from './dashboard.service';
import { KanbanBoardModule } from 'src/app/shared/kanban-board/kanban-board.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    KanbanBoardModule,
    CommonModule
  ]
})
export class DashboardModule { }
