import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header.component";
import { CommonModule } from "@angular/common";
import { AuthService } from "../core/auth/auth.service";

@NgModule({
    declarations: [HeaderComponent],
    imports: [CommonModule],
    exports: [HeaderComponent]
})
export class HeaderModule {}