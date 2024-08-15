/* eslint-disable no-restricted-imports */
import { expect, afterEach, beforeAll, afterAll } from "vitest";
import { cleanup } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";
import { initWorker } from "./src/mocks/nodeWorker";
expect.extend(matchers);

const worker = initWorker();

afterEach(() => {
    cleanup();
});

// Start worker before all tests
beforeAll(() => {
    worker.listen();
});

//  Close worker after all tests
afterAll(() => {
    worker.close();
});

// Reset handlers after each test `important for test isolation`
afterEach(() => {
    worker.resetHandlers();
});
