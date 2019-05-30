import { Class } from './Class';

export declare interface JavaClass<T> {

    class: Class<T>;

    new(...params: Array<any>): T;
}


export declare interface JavaObject<T> {

    getClass(): Class<T>;
}
