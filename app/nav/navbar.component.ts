import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'nav-bar',
    templateUrl: 'navbar.component.html',
    styles: [`
        li > a.active {color: orange;}
    `]
})
export class NavBarComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}