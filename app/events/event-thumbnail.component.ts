import { Component, OnInit , Input} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'event-thumbnail',
    templateUrl: 'event-thumbnail.component.html'
})
export class EventThumbnailComponent implements OnInit {

    @Input() event:any;

    constructor() { }

    ngOnInit() { }
}