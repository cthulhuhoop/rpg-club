import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from './shared/event.service';
import { NotifyService } from '../common/notify.service';
import { IEvent } from './shared/event.model'

@Component({
    moduleId: module.id,
    templateUrl: 'events-list.component.html'
})
export class EventsListComponent implements OnInit {

    events: IEvent[];

    constructor
        (private eventService: EventService
        , private notifyService: NotifyService
        , private route: ActivatedRoute) { }

    ngOnInit() {
        // this.eventService.getEvents().subscribe(events => this.events = events);
        this.events = this.route.snapshot.data['events']
    }

    handleEventClicked(data) {
        console.log("parent got it:" + data)
    }
    handleClick(eventName) {
        this.notifyService.success(eventName);

    }
}