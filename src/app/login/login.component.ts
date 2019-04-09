import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../core/authentication/authentication.service';
import { reject, resolve } from 'q';


@Component({
selector:  'app-login',
templateUrl:  './login.component.html',
styleUrls: ['./login.component.css']
})
export  class  LoginComponent  implements  OnInit {
    constructor(private  authService:  AuthenticationService, private formBuilder: FormBuilder, private router:Router) { }
    
    private error:string;
    loginForm: FormGroup;

    @ViewChild('userEmail') userEmailInput: ElementRef;
     
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            userEmail: ['', [Validators.email, Validators.required]],
            userPassword: ['', Validators.required]
        });
    }

    login() {
        const userEmail = this.loginForm.get('userEmail').value;
        const userPassword = this.loginForm.get('userPassword').value;
        this.authService.login(userEmail, userPassword).then(response => {
            this.router.navigate(['admin/dashboard']);
        }, err => {
            this.loginForm.reset();
            this.userEmailInput.nativeElement.focus();
            this.error = err.message;
        })
    }
    

}