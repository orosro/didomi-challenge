/* eslint-disable @typescript-eslint/no-explicit-any */
import { AjaxError } from "utils/http";

import { useNavigate, useRouteError } from "shared/Router";

import { GenericErrorResult } from "./GenericErrorResult";

interface IProps<Response extends AjaxError["response"] = any> {
    error?: AjaxError<Response>;
}

export function ErrorPageStrategy<Response extends AjaxError["response"] = any>(
    props: IProps<Response>
) {
    const navigate = useNavigate();
    const routeError = useRouteError();

    const error = props.error ?? routeError;

    if (error instanceof AjaxError) {
        switch (error.status) {
            case 500:
                return <GenericErrorResult />;
            case 401:
                navigate("/");
                return null;
            case 403:
            case 404:
                return <GenericErrorResult />;
            default:
                return <GenericErrorResult />;
        }
    }

    return <GenericErrorResult />;
}
