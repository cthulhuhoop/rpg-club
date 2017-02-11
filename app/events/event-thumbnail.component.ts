import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'event-thumbnail',
    templateUrl: 'event-thumbnail.component.html'
})
export class EventThumbnailComponent implements OnInit {

    @Input() event: any;
    @Output() eventClick = new EventEmitter();

    constructor() { }

    ngOnInit() { }

    handleClickme() {
        console.log("me clicked");
        this.eventClick.emit(this.event.name)
    }
}