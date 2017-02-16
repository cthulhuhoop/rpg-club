import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import {NotifyService} from '../common/notify.service';

@Component({
    moduleId: module.id,
    templateUrl: 'events-list.component.html'
})
export class EventsListComponent implements OnInit {

    events: any[];

    constructor(private eventService: EventService
    ,private notifyService: NotifyService) { }

    ngOnInit() {
        this.events = this.eventService.getEvents();
    }

    handleEventClicked(data) {
        console.log("parent got it:" + data)
    }
    handleClick(eventName){
        this.notifyService.success(eventName);

    }
}