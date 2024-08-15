import { RequestHandler, http, HttpResponse, delay } from "msw";
import { host } from "utils/http";
import { db } from "../../db";
import { HttpResponseResolver } from "msw/lib/core/http";

type DeleteConsentParams = {
    id: string;
};

export const deleteConsentHandler = (
    resolver?: HttpResponseResolver
): RequestHandler =>
    http.delete<DeleteConsentParams>(
        `${host}/consents/:id`,
        async (resolverArgs) => {
            if (resolver) return resolver(resolverArgs);

            const user = db.user.findFirst({
                where: {
                    id: {
                        equals: resolverArgs.params.id,
                    },
                },
            });

            if (!user) {
                // returns with status code 404
                return HttpResponse.json({}, { status: 404 });
            }

            db.user.delete({
                where: {
                    id: {
                        equals: user.id,
                    },
                },
            });
            await delay();

            return HttpResponse.json(user);
        }
    );
