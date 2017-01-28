import {Component} from '@angular/core'

@Component(
    {
        selector: 'events-app',
        template: `
        <div>
            <h2>Yo from component</h2>
            <events-list></events-list>
        </div>
        `}
)
export class EventsAppComponent {

}