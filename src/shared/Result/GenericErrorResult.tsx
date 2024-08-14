import { t } from "utils";

import { ErrorIcon } from "./Icons";
import { Result } from "./Result";
import Button from "@mui/material/Button";

const GenericErrorResult = () => {
    return (
        <Result
            image={<ErrorIcon />}
            heading={t("Something went seriously wrong")}
            subheading={t(
                "It sounds like something unexpected happened right now. Please, inform our support team about this issue ASAP!"
            )}
        >
            <Button onClick={() => {}}>{t("Contact us!")}</Button>
        </Result>
    );
};

export { GenericErrorResult };
