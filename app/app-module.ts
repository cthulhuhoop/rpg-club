import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import {
    CreateEventComponent,
    EventsListComponent,
    EventsListResolver,
    EventThumbnailComponent,
    EventService,
    EventDetailsComponent,
    EventRouteActivator
} from './events/index'
import { EventsAppComponent } from './events-app.component'
import { NavBarComponent } from './nav/navbar.component'
import { Error404Component } from './errors/404.component'
import { NotifyService } from './common/notify.service'
import { appRoutes } from './routes'

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
        , EventsListResolver
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

