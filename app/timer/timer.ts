import TimerWidgetComponent from './timer-widget.component';
import TimerComponent from './timer.component';


const TIMER_DIRECTIVES: any[] = [
    TimerWidgetComponent,
    TimerComponent
];

export {
    TIMER_DIRECTIVES,
    // Not sure why we need this here.
    TimerWidgetComponent,
    TimerComponent
}