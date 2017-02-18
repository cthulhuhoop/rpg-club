import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs/Rx'
import { IEvent } from './event.model'

@Injectable()
export class EventService {

    constructor() { }

    getEvents():Observable<IEvent[]> {

        let subject = new Subject<IEvent[]>()

        setTimeout(function() {
            subject.next(EVENTS)
            subject.complete()    
        }, 200);

        return subject;
    }

    getEvent(id: number):IEvent {
        return EVENTS.find(event => event.id === id);
    }
}

const EVENTS:IEvent[] = [
    { id: 1, name: "The Demon Court Jesters", organiser: "fred", system: "D&D 5", maxPlayers: 5 },
    { id: 2, name: "Against the Shadow", organiser: "jim", system: "Call of Cthulhu", maxPlayers: 6 },
    { id: 3, name: "Spinward Surge", organiser: "jane", system: "Traveler", maxPlayers: 4 },
    { id: 4, name: "Two fisted approach", organiser: "john", system: "Savage Worlds", maxPlayers: 0 },
    { id: 5, name: "Goblin grunts", organiser: "will", system: "D&D5", maxPlayers: 12 }
]