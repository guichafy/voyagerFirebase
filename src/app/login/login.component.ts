import { Component, OnInit } from  '@angular/core';
import { AuthService } from  '../core/auth/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
selector:  'app-login',
templateUrl:  './login.component.html',
styleUrls: ['./login.component.css']
})
export  class  LoginComponent  implements  OnInit {
    constructor(private  authService:  AuthService, private formBuilder: FormBuilder) { }
    //Bind com [formGroup]="loginForm"
    loginForm: FormGroup;
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            userEmail: ['', [Validators.email, Validators.required]],
            userPassword: ['', Validators.required]
        });
    }

    login() {
        const userEmail = this.loginForm.get('userEmail').value;
        const userPassword = this.loginForm.get('userPassword').value;
        this.authService.login(userEmail, userPassword,'admin/dashboard');
    }
    

}