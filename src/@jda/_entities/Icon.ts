export abstract class Icon {
    abstract getEncoding(): string;

    // TODO type File/IS/byte[]
    static from(file: any): Icon {
        throw Error;
    }
}