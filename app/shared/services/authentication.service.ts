import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export default class AuthenticationService {
    constructor() {}

    login({username, password}): Promise<boolean> {}

    logout(): Promise<boolean>{}

    static isAuthorized(): boolean {}
}