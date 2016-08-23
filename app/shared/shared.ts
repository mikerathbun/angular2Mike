import Queueable from './interfaces/queueable';
import Task from './interfaces/task';

import FormattedTimePipe from './pipes/formatted-time.pipe';
import QueuedOnlyPipe from './pipes/queued-only.pipe';

const SHARED_PIPES: any[] = [
    FormattedTimePipe,
    QueuedOnlyPipe
];

export {
    Queueable,
    Task,

    FormattedTimePipe,
    QueuedOnlyPipe
};