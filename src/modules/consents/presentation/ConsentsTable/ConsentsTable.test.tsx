import {
    render,
    screen,
    waitFor,
    waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { WithQueryProvider } from "utils/tests";
import { ConsentsTable } from "./ConsentsTable";

import { http, HttpResponse } from "msw";
import { nodeWorker } from "mocks/nodeWorker";
import { host } from "utils/http";

describe("ConsentsTable", () => {
    it("should render an empty table", () => {
        nodeWorker.use(
            http.get(`${host}/consents`, () => {
                return HttpResponse.json([]);
            })
        );

        render(
            <WithQueryProvider>
                <ConsentsTable />
            </WithQueryProvider>
        );

        // You can use logTestingPlaygroundURL to output a link in the terminal to a playground
        // screen.logTestingPlaygroundURL();
        screen.getByText(/no rows/i);

        nodeWorker.resetHandlers();
    });

    // TODO: This test is flaky because the integration with react query, need to figure out how to reset everything
    it("should render a table with data", async () => {
        render(
            <WithQueryProvider>
                <ConsentsTable />
            </WithQueryProvider>
        );

        expect(
            screen.getByRole("columnheader", { name: "ID" })
        ).toHaveTextContent("ID");
        // TODO: The table functionality already has tests, so no need to do test it again

        await waitFor(() => {
            screen.getAllByRole("gridcell");
        });

        const deleteButtons = screen.getAllByRole("button", { name: "x" });
        expect(deleteButtons.length).toEqual(2);

        screen.getByText(/1–2 of 10/i);
        await userEvent.click(deleteButtons[0]);
        screen.getByText(/thinking/i);
        await waitForElementToBeRemoved(screen.getByText(/thinking/i));
        screen.getByText(/1–2 of 9/i);
    });
});
