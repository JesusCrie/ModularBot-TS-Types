export function load(source: string | any): void {
}

export function loadWithNewGlobal(source: string | any, args: Array<any>): void {

}

export function print(...arg: any) {
}

export function printErr(...arg: any) {
}

export class Graal {
    static versionJS: string;
    static versionGraalVM: string;
    static isGraalRuntime: boolean;
}

export class Java {
    static type(className: string): any {
    }

    static from(javaData: any): Array<any> {
        return [];
    }

    static to(jsData: any, toType: any): any {
        return undefined;
    }

    static isJavaObject(obj: any): boolean {
        return false;
    }

    static isType(obj: any): boolean {
        return false;
    }

    static typeName(obj: any): string | undefined {
        return undefined;
    }

    static isJavaFunction(fn: any): boolean {
        return false;
    }

    static isScriptObject(obj: any): boolean {
        return false;
    }

    static isScriptFunction(fn: any): boolean {
        return false;
    }

    static addToClasspath(location: string): void {
    }
}

export class Polyglot {
    static export(key: string, value: any): void {
    }

    static import(key: string): any {
    }

    static eval(languageId: string, sourceCode: string): any {
    }

    static evalFile(languageId: string, sourceFileName: string): any {
    }
}