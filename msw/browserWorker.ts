import { RequestHandler } from "msw";
import { setupWorker } from "msw/browser";
import {
    deleteConsentHandler,
    getConsentsHandler,
    addConsentHandler,
} from "../src/utils";

export const initWorker = () => {
    const enabledHandlers: RequestHandler[] = [
        getConsentsHandler(),
        deleteConsentHandler(),
        addConsentHandler(),
    ];
    return setupWorker(...enabledHandlers);
};
