export type Vector2 = {
    x: number;
    y: number;
};

export type Vector3 = {
    x: number;
    y: number;
    z: number;
};

export interface ScrambledMath {
    seed?: number;

    mod(n: number, m: number): number;

    length2(x: number, y: number): number;
    length3(x: number, y: number, z: number): number;

    capVector2(vec: Vector2, len: number): Vector2;
    capVector3(vec: Vector3, len: number): Vector3;

    normalize2(vec: Vector2, len?: number): Vector2;
    normalize3(vec: Vector3, len?: number): Vector3;

    clamp(v: number, min: number, max: number): number;

    randomInt(low: number, high: number): number;

    seededRandom(min?: number, max?: number): number;
    seededRandomInt(min: number, max: number): number;

    diff(a: number, b: number, threshold: number): number;

    shuffleArray<T>(array: T[]): T[];
    seededShuffleArray<T>(array: T[]): T[];

    getRandomInt(min: number, max: number): number;
    getRandomChance(chance: number): boolean;
    seededRandomChance(chance: number): boolean;

    getRandomChar(): string;
    getRandomCode(length?: number): string;
    getScrambled(min?: number, max?: number): string;

    getRandomBool(): boolean;
    getRandomName(moreRandom?: boolean): string;

    getRandomFromList<T>(list: T[]): T;
    seededRandomFromList<T>(list: T[]): T;

    seededRandomAlphaNumeric(count: number, uuid: number): string;
    getRandomAsciiChars(count: number): string;
}

export interface Scrambled extends ScrambledMath {
    getRandomDomain(): string;

    getRandomOrigin(additionalHeaders?: Record<string, string>): Record<string, string>;

    getRandomTLD(): string;
    getRandomProvider(): string;
    getRandomTerm(): string;

    getRandomEmail(simple?: boolean): string;

    getRandomPassword(min?: number, max?: number): string;

    generateReadableVariants(input: string, count?: number): string[];
}

declare const scrambled: Scrambled;

export default scrambled;

export const username_terms: string[];
export const ShellShockersProxyList: string[];
export const userAgentList: string[];
export const tlds: string[];
export const emailProviders: string[];

export const similarChars: Record<string, string[]>;

export const charactersLower: string;
export const charactersUpper: string;
export const charactersNumber: string;
export const charactersSymbols: string;
export const charactersLowerNumber: string;
export const charactersLowerUpperNumber: string;
export const charactersAll: string;