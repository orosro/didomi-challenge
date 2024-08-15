import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient as commonQueryClient } from "../query";

export const WithQueryProvider = ({
    queryClient,
    children,
}: {
    children: React.ReactNode;
    queryClient?: typeof commonQueryClient;
}) => {
    return (
        <QueryClientProvider client={queryClient ?? commonQueryClient}>
            {children}
        </QueryClientProvider>
    );
};
