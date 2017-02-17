import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx'

@Injectable()
export class EventService {

    constructor() { }

    getEvents() {

        let subject = new Subject()

        setTimeout(function() {
            subject.next(EVENTS)
            subject.complete()    
        }, 200);

        return subject;
    }

    getEvent(id: number) {
        return EVENTS.find(event => event.id === id);
    }
}

const EVENTS = [
    { id: 1, name: "Bingo Show", cost: 4.99 },
    { id: 2, name: "Lingo Show", cost: 3.99 },
    { id: 3, name: "Mingo Show", cost: 2.99 },
    { id: 4, name: "Bongo Show", cost: 1.99 },
    { id: 5, name: "go go Show", cost: 0.99 },
]