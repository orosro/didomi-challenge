import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DeleteButton } from "./DeleteButton";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "utils";

export const WithProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};

describe("DeleteButton", () => {
    it("should render and call mutation on click", async () => {
        const id = "123";
        const scene = render(
            <WithProvider>
                <DeleteButton id={id} />
            </WithProvider>
        );

        expect(screen.getByRole("button")).toHaveTextContent("x");
        await userEvent.click(screen.getByText("x"));
        expect(screen.getByRole("button")).toHaveTextContent("Thinking");
    });
});
