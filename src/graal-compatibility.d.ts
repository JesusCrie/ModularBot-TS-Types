export declare function load(source: string | any): void;

export declare function loadWithNewGlobal(source: string | any, args: Array<any>): void;

export declare function print(...arg: any): void;

export declare function printErr(...arg: any): void;

export declare class Graal {
    static versionJS: string;
    static versionGraalVM: string;
    static isGraalRuntime: boolean;
}

export declare class Java {
    static type(className: string): any;

    static from(javaData: any): Array<any>;

    static to(jsData: any, toType: any): any;

    static isJavaObject(obj: any): boolean;

    static isType(obj: any): boolean;

    static typeName(obj: any): string | undefined;

    static isJavaFunction(fn: any): boolean;

    static isScriptObject(obj: any): boolean;

    static isScriptFunction(fn: any): boolean;

    static addToClasspath(location: string): void;
}

export declare class Polyglot {
    static export(key: string, value: any): void;

    static import(key: string): any;

    // To avoid conflicts with the native eval method
    static eval(languageId: string, sourceCode: string): any;

    static evalFile(languageId: string, sourceFileName: string): any;
}
