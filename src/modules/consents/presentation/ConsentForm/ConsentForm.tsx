import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { t } from "../../../../utils";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAddConsentMutation } from "../../infrastructure";
import CircularProgress from "@mui/material/CircularProgress";

export type Inputs = {
    fullName: string;
    email: string;
    consents: {
        newsletter: boolean;
        ads: boolean;
        statistics: boolean;
    };
};

// TODO: Would be nice to decouple the rendering of the various states from the form logic
export const ConsentForm = () => {
    const { register, handleSubmit, formState, reset } = useForm<Inputs>();
    const addMutation = useAddConsentMutation();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        addMutation.mutate(data);
    };

    if (addMutation.isLoading) {
        return <CircularProgress />;
    }

    if (addMutation.isError) {
        return t("Something went wrong");
    }

    if (addMutation.isSuccess) {
        return (
            <div>
                <h3>{t("Good Job! Consent submitted")}</h3>
                <Button
                    variant="outlined"
                    onClick={() => {
                        reset();
                        addMutation.reset();
                    }}
                >
                    {t("Add a new one")}
                </Button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack direction="row" spacing={2}>
                <TextField
                    id="fullName"
                    label={t("Full name")}
                    variant="outlined"
                    error={Boolean(formState.errors.fullName)}
                    helperText={formState.errors.fullName?.message}
                    {...register("fullName", {
                        required: t("Full name is required"),
                        minLength: {
                            value: 3,
                            message: t("Name should be at least 3 characters"),
                        },
                    })}
                />
                <TextField
                    id="email"
                    label={t("Email")}
                    variant="outlined"
                    error={Boolean(formState.errors.email)}
                    helperText={formState.errors.email?.message}
                    {...register("email", {
                        required: t("Email is required"),
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: t("invalid email address"),
                        },
                    })}
                />
            </Stack>
            <Stack>
                <FormControlLabel
                    control={<Checkbox id="newsletter" defaultChecked />}
                    label={t("Receive newsletter")}
                    {...register("consents.newsletter")}
                />
                <FormControlLabel
                    control={<Checkbox id="ads" />}
                    label={t("Be shown targeted ads")}
                    {...register("consents.ads")}
                />
                <FormControlLabel
                    control={<Checkbox id="statistics" />}
                    label={t("Contribute to anonymous visit statistics")}
                    {...register("consents.statistics")}
                />
            </Stack>
            <Button variant="outlined" type="submit">
                {t("Submit")}
            </Button>
        </form>
    );
};
