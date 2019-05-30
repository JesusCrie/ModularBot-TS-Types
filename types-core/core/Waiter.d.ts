import { Event, JDA, MessageReceivedEvent } from '../../types-jda/jda/core';
import { Class } from './graal/Class';
import { MessageChannel, User } from '../../types-jda/jda/entities';

export declare class Waiter {

    public static awaitEvent<T extends Event>(shard: JDA, eventClass: Class<T>,
                                              checker: ((event: T) => boolean) | null, onSuccess: ((event: T) => void) | null,
                                              onTimeout: () => void | null, timeout: number, disposable: boolean): void;

    public static getNextEvent<T extends Event>(shard: JDA, eventClass: Class<T>,
                                                checker: (event: T) => boolean | null, timeout: number): T;

    public static getNextMessageFromUser(shard: JDA, target: User, timeout: number): MessageReceivedEvent;

    public static getNextMessageFromUserInChannel(shard: JDA, target: User, targetChannel: MessageChannel, timeout: number): MessageReceivedEvent;

    public static createListener<T extends Event>(shard: JDA, eventClass: Class<T>,
                                                  checker: ((event: T) => boolean) | null, onSuccess: ((event: T) => void) | null,
                                                  onTimeout: () => void, timeout: number, disposable: boolean): WaiterListener<T>;
}

export declare class WaiterListener<T extends Event> {

    constructor(shard: JDA, eventClass: Class<T>);

    public register(): this;

    public unregister(): this;

    public onEvent(event: Event): void;

    public cancel(mayInterruptIfRunning: boolean): boolean;
}
