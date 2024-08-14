import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DeleteButton } from "./DeleteButton";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "utils";

export const WithProvider = ({ children }: { children: React.ReactNode }) => {
    return <QueryClientProvider client={queryClient}></QueryClientProvider>;
};

describe("DeleteButton", () => {
    it("should render and call mutation on click", () => {
        const id = "123";
        const scene = render(
            <WithProvider>
                <DeleteButton id={id} />
            </WithProvider>
        );

        // await userEvent.click(screen.getByText('Load Greeting'))

        expect(screen.getByRole("button")).toHaveTextContent("x");
    });
});
