import { setupServer } from "msw/node";
import {
    deleteConsentHandler,
    getConsentsHandler,
    addConsentHandler,
} from "./handlers";

export const initWorker = () => {
    const enabledHandlers = [
        getConsentsHandler(),
        deleteConsentHandler(),
        addConsentHandler(),
    ];
    return setupServer(...enabledHandlers);
};

export const nodeWorker = initWorker();
