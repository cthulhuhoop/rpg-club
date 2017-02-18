import { Component, OnInit } from '@angular/core'
import { EventService } from '../shared/event.service'
import { ActivatedRoute } from '@angular/router'
import { IEvent } from '../shared/event.model'

@Component({
    moduleId: module.id,
    templateUrl: 'event-details.component.html'
})
export class EventDetailsComponent implements OnInit {

    event: IEvent;

    constructor(private eventService: EventService,
        private route: ActivatedRoute) { }

    ngOnInit() {
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id'])
    }

    handleClickme() {
        console.log("me clicked in details");
    }
}