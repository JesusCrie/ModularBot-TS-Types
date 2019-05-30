export declare class StringBuilder {

    public constructor(capacity?: number);
    public constructor(str?: string);

    public append(obj: any): this;

    public appendCodePoint(codePoint: number): this;

    public delete(start: number, end: number): this;

    public deleteCharAt(index: number): this;

    public replace(start: number, end: number, str: string): this;

    public insert(offset: number, str: string | number): this;

    public indexOf(str: string, fromIndex?: number): number;

    public lastIndexOf(str: string, fromIndex?: number): number;

    public reverse(): this;

    public toString(): string;
}
