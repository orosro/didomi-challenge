import { factory, primaryKey } from "@mswjs/data";
import { faker } from "@faker-js/faker";

// Define user model
export const db = factory({
    user: {
        id: primaryKey(faker.string.uuid),
        fullName: faker.person.fullName,
        email: faker.internet.email,
        consents: {
            newsletter: faker.datatype.boolean,
            ads: faker.datatype.boolean,
            statistics: faker.datatype.boolean,
        },
    },
});

// Seed database with 10 initials users
for (let index = 0; index < 10; index++) {
    db.user.create();
}
