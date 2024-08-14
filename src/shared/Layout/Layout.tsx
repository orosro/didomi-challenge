import { Outlet } from "shared/Router";

import Container from "@mui/material/Container";

import { Footer } from "./Footer";
import { Navbar } from "./Navbar/MaterialNavbar";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

export const Layout = () => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            sx={{ minHeight: "100vh" }}
        >
            <div>
                <Navbar />
                <Offset />
            </div>
            <Container
                sx={{
                    minHeight: "calc(100vh - 150px)", // TODO: Use the grid to handle a min height of the container
                }}
            >
                <Outlet />
            </Container>
            <Footer />
        </Grid>
    );
};
