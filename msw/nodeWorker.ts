import { RequestHandler } from "msw";
import { setupServer } from "msw/node";
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
    return setupServer(...enabledHandlers);
};
