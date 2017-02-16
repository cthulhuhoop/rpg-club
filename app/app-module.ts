import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { EventsAppComponent } from './events-app.component'
import { CreateEventComponent } from './events/create-event.component'
import { EventsListComponent } from './events/events-list.component'
import { EventThumbnailComponent } from './events/event-thumbnail.component'
import { NavBarComponent } from './nav/navbar.component'
import { Error404Component } from './errors/404.component'
import { EventService } from './events/shared/event.service'
import { NotifyService } from './common/notify.service'
import { EventDetailsComponent } from './events/event-details/event-details.component'
import { appRoutes } from './routes'
import { EventRouteActivator } from './events/event-details/event-route-activator.service'

@NgModule({
    imports: [BrowserModule,
        RouterModule.forRoot(appRoutes)],
    exports: [],
    declarations:
    [EventsAppComponent
        , EventsListComponent
        , EventThumbnailComponent
        , NavBarComponent
        , Error404Component
        , EventDetailsComponent
        , CreateEventComponent
    ],
    providers: [EventService
        , NotifyService
        , EventRouteActivator
        , {
            provide: 'canDeactivateCreateEvent',
            useValue: checkDirtyState
        }
    ],
    bootstrap: [EventsAppComponent]
})
export class AppModule { }

function checkDirtyState(component: CreateEventComponent) {
    if (component.isDirty)
        return window.confirm("dirty. proceed?")
    return true
}

