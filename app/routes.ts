import { Routes } from '@angular/router'
import { Error404Component } from './errors/404.component'
import {
    EventDetailsComponent,
    EventsListComponent,
    EventsListResolver,
    CreateEventComponent,
    EventRouteActivator
} from './events/index'

export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventsListComponent, resolve: { events: EventsListResolver } },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
    { path: '404', component: Error404Component },
    { path: 'user', loadChildren: 'app/user/user.module#UserModule' },
    { path: '', redirectTo: '/events', pathMatch: 'full' }
]
