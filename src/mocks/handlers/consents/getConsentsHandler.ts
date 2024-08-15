import { RequestHandler, http, HttpResponse } from "msw";
import { host } from "utils/http";
import { db } from "../../db";
import { HttpResponseResolver } from "msw/lib/core/http";

export const getConsentsHandler = (
    resolver?: HttpResponseResolver
): RequestHandler =>
    http.get(`${host}/consents`, (resolverArgs) => {
        if (resolver) return resolver(resolverArgs);

        const users = db.user.getAll();

        return HttpResponse.json(users);
    });
