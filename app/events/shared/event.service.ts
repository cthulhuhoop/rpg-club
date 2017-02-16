import { Injectable } from '@angular/core';

@Injectable()
export class EventService {

    constructor() { }

    getEvents() {
        return EVENTS;
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