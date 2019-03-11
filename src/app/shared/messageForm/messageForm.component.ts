import { Component, Input } from "@angular/core";

@Component({
    selector: 'vg-messageform',
    templateUrl: './messageForm.component.html'
})
export class MessageFormComponent {


    @Input() message = '';


}