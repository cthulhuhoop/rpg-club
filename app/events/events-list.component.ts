import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'events-list',
    templateUrl: 'events-list.component.html'
})
export class EventsListComponent implements OnInit {

    event = {
        name: "Bingo Show",
        cost: 4.99
    }

    constructor() { }

    ngOnInit() { }

    handleEventClicked(data) {
        console.log("parent got it:" + data)
    }
}