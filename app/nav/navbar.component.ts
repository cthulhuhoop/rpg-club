import { Component, OnInit } from '@angular/core'
import { AuthService } from '../user/auth.service'

@Component({
    moduleId: module.id,
    selector: 'nav-bar',
    templateUrl: 'navbar.component.html',
    styles: [`
        li > a.active {color: orange;}
    `]
})
export class NavBarComponent implements OnInit {

    constructor(private authService:AuthService) { }

    ngOnInit() { }
}