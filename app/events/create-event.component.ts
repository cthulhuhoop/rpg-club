import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
    moduleId: module.id,
    template: `
    <h1>New Event</h1>
    <hr>
    <div class="col-md-6">
        <h3>[create event form ...]</h3>
        <br/>
        <br/>
        <button type="Submit" class="btn btn-primary">Save</button>
        <button type="button" class="btn btn-default" (click)="cancel()">Cancel</button>
    </div>
    `
})
export class CreateEventComponent implements OnInit {

    isDirty:boolean = false;

    constructor(private router: Router) { }

    ngOnInit() { }

    cancel() {
        this.router.navigate(['/events'])
    }
}