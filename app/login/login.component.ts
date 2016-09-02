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
    showUsernameHint: boolean = false;

    constructor(
        formBuilder: FormBuilder,
        private router: Router) {
        
        this.loginForm = formBuilder.group({
            username: ['', 
                Validators.compose([
                    Validators.required,
                    this.emailValidator
                ])
            ],
            password: ['', Validators.required]
        });

        const username = this.loginForm.controls['username'];
        username.valueChanges.subscribe(value => {
            this.showUsernameHint = (username.dirty &&
                value.indexOf('@') < 0);
        });


    }

    authenticate() {
        let credentials: any = this.loginForm.value;
        this.notValidCredentials = !this.loginForm.valid && this.loginForm.dirty;

        if (credentials.username === 'john.doe@mail.com' && credentials.password === 'letmein') {
            this.router.navigateByUrl('/');
        } else {
            this.notValidCredentials = true;
        }
    }
    private emailValidator(control: Control): { [key: string]: boolean } {
        if (!/(.+)@(.+){2,}\.(.+){2,}/.test(control.value)) {
            return {
                'emailNotValid': true
            };
        }
        return null;
    }
}