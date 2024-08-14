import { primaryKey } from "@mswjs/data";
import { faker } from "@faker-js/faker";

export type ConsentingUserPayload = {
    id: string;
    fullName: string;
    email: string;
    consents: {
        newsletter: Boolean;
        ads: Boolean;
        statistics: Boolean;
    };
};
