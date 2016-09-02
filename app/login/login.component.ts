import { Component } from '@angular/core';
import { 
    FormBuilder,
    ControlGroup,
    Validators,
    Control
} from '@angular/common';
import { Router } from '@angular/router-deprecated';

@Component({
    selector: 'pomodoro-login',
    templateUrl: 'app/login/login.component.html'
})
export default class LoginComponent {
    loginForm: ControlGroup;
    notValidCredentials: boolean = false;

    constructor(
        formBuilder: FormBuilder,
        private router: Router) {}

    authenticate() {}
    
}