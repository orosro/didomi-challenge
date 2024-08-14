import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

export const Footer = () => {
    const bg = "#cecece"; // gray.50 gray.900
    const color = "#fff"; // gray 700, 200
    return (
        <Box
            sx={{
                bgcolor: bg,
                color: color,
                p: 4,
            }}
        >
            <Container maxWidth="sm">
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        1
                    </Grid>
                    <Grid item xs={3}>
                        1
                    </Grid>
                    <Grid item xs={3}>
                        1
                    </Grid>
                    <Grid item xs={3}>
                        1
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};
