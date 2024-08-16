import {
    render,
    screen,
    waitFor,
    waitForElementToBeRemoved,
} from "@testing-library/react";
import { WithQueryProvider } from "utils/tests";
import React from "react";
import { ConsentForm } from "./ConsentForm";
import { beforeEach } from "vitest";
import userEvent from "@testing-library/user-event";
// eslint-disable-next-line no-restricted-imports
import { MemoryRouter } from "react-router-dom";

describe("ConsentsForm", () => {
    beforeEach(() => {
        renderScene();
    });

    it("should render the form", () => {
        screen.getByRole("textbox", { name: /Full name/i });
        screen.getByRole("textbox", { name: /email/i });
        screen.getByRole("checkbox", { name: /newsletter/i });
        screen.getByRole("checkbox", { name: /ads/i });
        screen.getByRole("checkbox", { name: /statistics/i });
        screen.getByRole("button", { name: /submit/i });
    });

    it("should not submit with an empty form", async () => {
        await userEvent.click(screen.getByRole("button"));

        screen.getByText(/Full name is required/i);
        screen.getByText(/email is required/i);
        screen.getByText(/At least one consent is required/i);
    });

    it("should not submit with just the name", async () => {
        await userEvent.type(
            screen.getByRole("textbox", { name: /Full name/i }),
            "some name"
        );

        await userEvent.click(screen.getByRole("button"));

        screen.getByText(/email is required/i);
        screen.getByText(/At least one consent is required/i);
    });
    it("should not submit with just the email", async () => {
        await userEvent.type(
            screen.getByRole("textbox", { name: /email/i }),
            "email@test.com"
        );

        await userEvent.click(screen.getByRole("button"));

        screen.getByText(/Full name is required/i);
        screen.getByText(/At least one consent is required/i);
    });
    it("should not submit with just a consent", async () => {
        await userEvent.click(screen.getByRole("checkbox", { name: /ads/i }));

        await userEvent.click(screen.getByRole("button"));

        screen.getByText(/Full name is required/i);
        screen.getByText(/email is required/i);
    });

    it("should validate the email", async () => {
        await userEvent.type(
            screen.getByRole("textbox", { name: /email/i }),
            "invalid email"
        );

        await userEvent.click(screen.getByRole("button"));

        screen.getByText(/invalid email address/i);
    });

    it("should properly submit", async () => {
        await userEvent.type(
            screen.getByRole("textbox", { name: /Full name/i }),
            "some name"
        );
        await userEvent.type(
            screen.getByRole("textbox", { name: /email/i }),
            "email@test.com"
        );
        await userEvent.click(screen.getByRole("checkbox", { name: /ads/i }));

        await userEvent.click(screen.getByRole("button"));

        screen.getByRole("progressbar");

        await waitForElementToBeRemoved(screen.getByRole("progressbar"));

        screen.debug();
    });
});

const renderScene = () => {
    render(
        <MemoryRouter initialEntries={["/"]}>
            <WithQueryProvider>
                <ConsentForm />
            </WithQueryProvider>
        </MemoryRouter>
    );
};
