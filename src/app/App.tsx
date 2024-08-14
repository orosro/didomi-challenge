// eslint-disable-next-line no-restricted-imports
import { RouterProvider } from "react-router-dom";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { router } from "pages/router";

import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";

function App() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    if (loading) {
        return (
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{ minHeight: "100vh" }}
            >
                <CircularProgress />
            </Grid>
        );
    }

    return <RouterProvider router={router} />;
}

export { App };
