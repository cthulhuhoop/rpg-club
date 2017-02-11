import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'events-list',
    templateUrl: 'events-list.component.html'
    // template: `
    // <div>
    //     <h1>Events Lister</h1>
    //     <div class="well hoverwell thumbnail">
    //         <div>Name: {{event.name}}</div>
    //         <div>Cost: £{{event.cost}}</div>          
    //     </div>
    // </div>
    // `
})
export class EventsListComponent implements OnInit {

    event = {
        name:"Bingo Showw",
        cost: 4.99
    }

    constructor() { }

    ngOnInit() { }
}