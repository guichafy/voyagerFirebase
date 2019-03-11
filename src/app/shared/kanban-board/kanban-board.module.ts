import { NgModule } from "@angular/core";
import { KanbanBoardComponent } from "./kanban-board.component";
import { SortablejsModule } from "angular-sortablejs";
import { CommonModule } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
    declarations: [KanbanBoardComponent],
    imports: [SortablejsModule, CommonModule, NgbModule],
    exports: [KanbanBoardComponent]
})
export class KanbanBoardModule {}