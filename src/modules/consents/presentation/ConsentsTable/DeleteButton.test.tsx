import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DeleteButton } from "./DeleteButton";
import { WithQueryProvider } from "utils/tests";

describe("DeleteButton", () => {
    it("should render and call mutation on click", async () => {
        const id = "123";
        render(
            <WithQueryProvider>
                <DeleteButton id={id} />
            </WithQueryProvider>
        );

        expect(screen.getByRole("button")).toHaveTextContent("x");
        await userEvent.click(screen.getByText("x"));
        expect(screen.getByRole("button")).toHaveTextContent("Thinking");
    });
});
