import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { MessageFormComponent } from "../shared/messageForm/messageForm.component";
import { MessageFormModule } from "../shared/messageForm/messageForm.module";
import { AdminComponent } from "./admin.component";
import { RouterModule } from "@angular/router";
import { CoreModule } from "../core/core.module";

@NgModule({
    declarations: [AdminComponent],
    imports: [
        CoreModule,
        CommonModule,
        RouterModule,
    ],
    exports: [AdminComponent]
})
export class AdminModule {}