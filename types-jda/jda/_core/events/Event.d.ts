import { JDA } from '../JDA';

export declare abstract class Event {

    public getJDA(): JDA;

    public getResponseNumber(): number;
}
