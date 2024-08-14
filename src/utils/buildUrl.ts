import { isEmpty } from "lodash-es";
import queryString from "query-string";

import { QueryParams } from "../types";

export const buildUrl = <Params = QueryParams>(
    path: string,
    params?: Params
) => {
    if (isEmpty(params)) {
        return path;
    }
    return `${path}?${queryString.stringify(params as Record<string, unknown>, {
        arrayFormat: "comma",
    })}`;
};
