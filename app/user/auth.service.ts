import { Injectable } from '@angular/core';
import { IUser } from './user.model'

@Injectable()
export class AuthService {

    currentUser: IUser

    constructor() { }

    loginUser(userName: string, password: string) {

        this.currentUser = {
            id: 1,
            userName: "Felix",
            firstName: "Felo",
            lastName: "Pastry"
        }
    }

    isAuthenticated(){
        return !!this.currentUser
    }
}