import { Component } from '@angular/core';
import { TIMER_DIRECTIVES } from './timer/timer';
import { TASKS_DIRECTIVES } from './tasks/tasks';
import { SHARED_PROVIDERS } from './shared/shared';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_PROVIDERS,
         RouteConfig,
         ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { TimerComponent} from './timer/timer';
import { TasksComponent, TaskEditorComponent } from './tasks/tasks'

@Component({
    selector: 'pomodoro-app',
    directives: [ROUTER_DIRECTIVES],
    providers: [SHARED_PROVIDERS, HTTP_PROVIDERS, ROUTER_PROVIDERS],
    templateUrl: 'app/app.component.html'
})
@RouteConfig([
    { 
        path: '',
        name: 'TasksComponent',
        component: TasksComponent
    },
    {
        path: 'tasks/editor',
        name: 'TaskEditorComponent',
        component: TaskEditorComponent
    },
    {
        path: 'timer/...',
        name: 'TimerComponent',
        component: TimerComponent
    }
])
export default class AppComponent{}