import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { Error404Component } from './errors/404.component';

@NgModule({
    imports: [BrowserModule],
    exports: [],
    declarations: 
        [EventsAppComponent
        ,EventsListComponent
        ,EventThumbnailComponent
        ,NavBarComponent
        ,Error404Component
        ],
    providers: [],
    bootstrap: [EventsAppComponent]
})
export class AppModule { }
