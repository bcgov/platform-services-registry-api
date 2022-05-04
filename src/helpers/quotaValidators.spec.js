import isValidQuotaString  from "./quotaValidators";

describe('string vlaidation', () => {
    it("returns true for valid quota parameter strings, false for invalid", () => {
        const originalError = console.error;
        console.error = jest.fn();
        expect.assertions(9);
        expect(isValidQuotaString("cpu-request-4-limit-8")).toEqual(true);
        expect(isValidQuotaString("memory-request-16-limit-32")).toEqual(true);
        expect(isValidQuotaString("storage-64")).toEqual(true);
        expect(isValidQuotaString("snapshot-5")).toEqual(true);

        expect(isValidQuotaString("some nonsense")).toEqual(false);
        expect(isValidQuotaString("cpu-request-1-limit-16")).toEqual(false);
        expect(isValidQuotaString("memory-request-16-limit-16")).toEqual(false);
        expect(isValidQuotaString("storage-abc")).toEqual(false);
        expect(isValidQuotaString("snapshot-420")).toEqual(false);
        console.error = originalError;
    });
});
