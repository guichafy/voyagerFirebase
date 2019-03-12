import { NgModule } from "@angular/core";
import { LoginComponent } from "./login.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { MessageFormComponent } from "../shared/messageForm/messageForm.component";
import { MessageFormModule } from "../shared/messageForm/messageForm.module";
import { LoginRoute } from "./login.route";

@NgModule({
    declarations: [LoginComponent],
    imports: [
        LoginRoute,
        CommonModule,
        ReactiveFormsModule,
        MessageFormModule
    ]
})
export class LoginModule {}