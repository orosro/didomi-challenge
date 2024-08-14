import { GenericErrorResult } from "shared/Result";
import { GiveConsent } from "./GiveConsent";

export const Component = GiveConsent;

export const ErrorBoundary = () => {
    return <GenericErrorResult />;
};
