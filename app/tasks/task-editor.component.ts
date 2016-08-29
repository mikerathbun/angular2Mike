import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'pomodoro-tasks-editor',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'app/tasks/task-editor.component.html'
})
export default class TaskEditorComponent {
    constructor() {}
}