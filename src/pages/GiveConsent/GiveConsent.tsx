import Box from "@mui/material/Box";
import { t } from "utils";
import { ConsentForm } from "modules/consents/presentation";

export const GiveConsent = () => {
    return (
        <Box>
            <h1>{t("Give Consent")}</h1>
            <ConsentForm />
        </Box>
    );
};
