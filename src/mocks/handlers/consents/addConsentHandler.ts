import { RequestHandler, http, HttpResponse, delay } from "msw";
import { host } from "utils/http";
import { db } from "../../db";
import { HttpResponseResolver } from "msw/lib/core/http";

export type AddConsentPayload = {
    fullName: string;
    email: string;
    consents: {
        newsletter: boolean;
        ads: boolean;
        statistics: boolean;
    };
};
export const addConsentHandler = (
    resolver?: HttpResponseResolver
): RequestHandler =>
    http.post<{}, AddConsentPayload>(
        `${host}/consents`,
        async (resolverArgs) => {
            if (resolver) return resolver(resolverArgs);

            const newConsent = await resolverArgs.request.json();

            const newUserWithConsent = db.user.create(newConsent);

            await delay();

            return HttpResponse.json(newUserWithConsent, { status: 201 });
        }
    );
