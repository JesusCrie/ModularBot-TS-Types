import { Java } from './graal-compatibility';

let _TimeUnit = Java.type('java.util.concurrent.TimeUnit');

export class TimeUnit {
    static NANOSECONDS: TimeUnit = _TimeUnit.NANOSECONDS;
    static MICROSECONDS: TimeUnit = _TimeUnit.MICROSECONDS;
    static MILLISECONDS: TimeUnit = _TimeUnit.MILLISECONDS;
    static SECONDS: TimeUnit = _TimeUnit.SECONDS;
    static MINUTES: TimeUnit = _TimeUnit.MINUTES;
    static HOURS: TimeUnit = _TimeUnit.HOURS;
    static DAYS: TimeUnit = _TimeUnit.DAYS;
}
