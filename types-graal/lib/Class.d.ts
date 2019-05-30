export declare class Class<T> {

    public isInstance(obj: any): boolean;

    public isAssignableFrom(clazz: Class<any>): boolean;

    public isInterface(): boolean;

    public isArray(): boolean;

    public isPrimitive(): boolean;

    public isAnnotation(): boolean;

    public isSynthetic(): boolean;

    public getName(): string;

    public getSuperClass(): Class<any>;

    public getIntefaces(): Array<Class<any>>;

    public getComponentType(): Class<any>;

    public getModifiers(): number;

    public getSigners(): Array<any>;

    public getDeclaringClass(): Class<any>;

    public getEnclosingClass(): Class<any>;

    public getSimpleName(): string;

    public getTypeName(): string;

    public getCanonicalName(): string;

    public isAnonymousClass(): boolean;

    public isLocalClass(): boolean;

    public isMemberClass(): boolean;

    public getSimpleBinaryName(): string;

    public getClasses(): Array<Class<any>>;

    public getDeclaredClasses(): Array<Class<any>>;

    // TODO type
    // TODO java io
    public getResourceAsStream(name: string): any;
}
