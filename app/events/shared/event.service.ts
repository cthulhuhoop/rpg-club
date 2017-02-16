import { Injectable } from '@angular/core';

@Injectable()
export class EventService {

    constructor() { }

    getEvents() {
        return EVENTS;       
    }
}

const EVENTS = [
    { name: "Bingo Show", cost: 4.99 },
    { name: "Lingo Show", cost: 3.99 },
    { name: "Mingo Show", cost: 2.99 },
    { name: "Bongo Show", cost: 1.99 },
    { name: "go go Show", cost: 0.99 },
]