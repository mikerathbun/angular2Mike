import { Component } from '@angular/core';
import {
    Router,
    ROUTER_DIRECTIVES,
    CanActivate,
    ComponentInstruction,
    OnActivate,
    CanDeactivate,
    OnDeactivate } from '@angular/router-deprecated';
import { Title } from '@angular/platform-browser';
import { 
    Task, 
    TaskService,
    AuthenticationService} from '../shared/shared';


@Component({
    selector: 'pomodoro-tasks-editor',
    directives: [ROUTER_DIRECTIVES],
    providers: [Title],
    templateUrl: 'app/tasks/task-editor.component.html',
    styles: [`
        .ng-valid { border-color: #3c763d; }
        .ng-invalid { border-color: #a94442; }
        .ng-untouched { border-color: #999999;}
    `]
})

@CanActivate(AuthenticationService.isAuthorized)
export default class TaskEditorComponent implements OnActivate, CanDeactivate, OnDeactivate {
    task: Task;
    changesSaved: boolean;

    constructor(
        private title: Title,
        private router: Router,
        private taskService: TaskService) {
        this.task = <Task>{};

    }
    routerOnActivate(): void {
        this.title.setTitle('Welcome to the Task Form');
    }

    routerCanDeactivate(
        next: ComponentInstruction,
        prev: ComponentInstruction) {
        // return this.changesSaved ||  confirm('Are you sure you want to leave?');
        return !AuthenticationService.isAuthorized() ||
            this.changesSaved ||
            confirm('Are you sure you want to leave?');
    }

    routerOnDeactivate(): void {
        this.title.setTitle('My Angular 2 Pomodoro Timer');
    }

    saveTask() {
        this.task.deadline = new Date(this.task.deadline.toString());
        this.taskService.addTask(this.task);
        this.changesSaved = true;
        this.router.navigate(['TasksComponent']);
    }
}