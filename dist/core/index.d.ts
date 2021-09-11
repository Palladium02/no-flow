declare function test(description: string, fn: () => boolean): void;
declare function expect(value: any): {
    toBe: (testValue: any) => boolean;
    notToBe: (testValue: any) => boolean;
    toBeGreateThan: (testValue: any) => boolean;
    toBeLessThan: (testValue: any) => boolean;
    toMatchType: (type: any) => boolean;
};
export { test, expect };
