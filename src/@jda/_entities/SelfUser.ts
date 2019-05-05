export interface SelfUser {
    isVerified(): boolean;

    isMfaEnabled(): boolean;

    getEmail(): string;

    isMobile(): boolean;

    isNitro(): boolean;

    getPhoneNumber(): string;

    getAllowedFileSize(): number;

    // TODO type
    // getManager(): any;
}