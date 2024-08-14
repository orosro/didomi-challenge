import { ReactNode } from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

interface IProps {
    image: ReactNode;
    heading: string;
    subheading: string;
    children: ReactNode;
}

const Result = ({ children, heading, image, subheading }: IProps) => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: "100vh" }}
        >
            {image}
            <Typography variant="h2" gutterBottom>
                {heading}
            </Typography>
            <Typography variant="body1" gutterBottom>
                {subheading}
            </Typography>
            {children}
        </Grid>
    );
};

export { Result };
