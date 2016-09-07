import { Component, OnInit } from '@angular/core';
import { SettingsService, TaskService } from '../shared/shared';
import { RouteParams, CanReuse, OnReuse } from '@angular/router-deprecated';



@Component({
    selector: 'pomodoro-timer-widget',
    styleUrls: ['app/timer/timer-widget.component.css'],
    template: `
    <div class="text-center">
      <img src="/app/shared/assets/img/pomodoro.png" [ngClass]="{ pulse: !isPaused }">
      <h3><small>{{ taskName }}</small></h3>
      <h1> {{ minutes }}:{{ seconds  | number: '2.0' }} </h1>
      <p>
        <button (click)="togglePause()" class="btn btn-danger">
        {{ buttonLabelKey | i18nSelect: buttonLabelsMap }}
        </button>
      </p>
    </div>`
})
export default class TimerWidgetComponent implements OnInit, CanReuse, OnReuse {
    minutes: number;
    seconds: number;
    isPaused: boolean;
    buttonLabelKey: string;
    buttonLabelsMap: any;
    taskName: string;
    
    constructor(private settingsService: SettingsService,
                private routeParams: RouteParams,
                private taskService: TaskService) { 
        this.buttonLabelsMap = settingsService.labelsMap.timer;
    }


    ngOnInit(): void { 
        this.resetPomodoro();
        setInterval(() => this.tick(), 1000);
        console.log("id is: " + this.routeParams.get('id'));
        let taskIndex = parseInt(this.routeParams.get('id'));
        //this.taskName = this.taskService.taskStore[0].name;
        if (!isNaN(taskIndex)) {
            this.taskName = this.taskService.taskStore[taskIndex].name;
        }
    }

    routerCanReuse(): boolean {
        return true;
    }

    routerOnReuse(): void {
        this.taskName = null;
        this.isPaused = false;
        this.resetPomodoro();
    }


    resetPomodoro(): void {
        this.isPaused = true;
        this.minutes = this.settingsService.timerMinutes - 1;
        this.seconds = 59;
        this.buttonLabelKey = 'start';
    }

    private tick(): void {
        if (!this.isPaused) {
            this.buttonLabelKey = 'pause';

            if (--this.seconds < 0) {
                this.seconds = 59;
                if (--this.minutes < 0) {
                    this.resetPomodoro();
                }
            }
        }
    }

    togglePause(): void {
        this.isPaused = !this.isPaused;
        if (this.minutes < this.settingsService.timerMinutes || this.seconds < 59) {
        this.buttonLabelKey = this.isPaused ? 'resume' : 'pause';
        }
    }
}