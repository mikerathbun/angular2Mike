import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export default class AuthenticationService {

    userIsLoggedIn: EventEmitter<boolean>;

    constructor() {
        this.userIsLoggedIn = new EventEmitter();
    }

    login({username, password}): Promise<boolean> {
        return new Promise(resolve => {
            let validCredentials: boolean = false;

            // @Note: In a real scenario this check
            // should be performed against a web service.
            if (username === 'jogn.doe@mail.com' && password === 'letmein') {
                validCredentials = true;
                window.sessionStorage.setItem('token', 'eyJhbGci0i');
            }
            this.userIsLoggedIn.emit(validCredentials);
            resolve(validCredentials);
        });
    }

    logout(): Promise<boolean>{
        return new Promise(resolve => {
            window.sessionStorage.removeItem('token');
            this.userIsLoggedIn.emit(false);
            resolve(true);
        });
    }

    static isAuthorized(): boolean {
        return !!window.sessionStorage.getItem('token');
    }
}