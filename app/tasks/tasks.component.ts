import { Component, OnInit } from '@angular/core';
import TaskIconsComponent from './task-icons.component';
import TaskTooltipDirective from './task-tooltip.directive';

import {
    TaskService,
    SettingsService,
    Task,
    SHARED_PIPES
} from '../shared/shared';

@Component({
    selector: 'pomodoro-tasks',
    directives: [TaskIconsComponent, TaskTooltipDirective],
    pipes: [SHARED_PIPES],
    styleUrls: ['app/tasks/tasks.componen.css'],
    templateUrl: 'app/tasks/tasks.component.html'
})
export default class TaskComponent implements OnInit {
    today: Date;
    tasks: Task[];
    queuedPomodoros: number;
    queueHeaderMapping: any;
    timerMinutes: number;

}