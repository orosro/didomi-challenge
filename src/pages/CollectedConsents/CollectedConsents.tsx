import Box from "@mui/material/Box";
import { ConsentsTable } from "modules/consents/presentation";

export const CollectedConsents = () => {
    return (
        <Box>
            <h1>Collected Consents</h1>
            <ConsentsTable />
        </Box>
    );
};
