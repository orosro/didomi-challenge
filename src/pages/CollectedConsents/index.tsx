import { GenericErrorResult } from "shared/Result";
import { CollectedConsents } from "./CollectedConsents";

export const Component = CollectedConsents;

export const ErrorBoundary = () => {
    return <GenericErrorResult />;
};
