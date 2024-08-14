import { createElement } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { initialize, mswLoader } from "msw-storybook-addon";

import { theme } from "../src/theme";
import { withReactQuery } from "../src/utils";

export const parameters = {
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    a11y: { disable: true },
};

initialize({
    onUnhandledRequest: "bypass",
});

export const decorators = [
    (story) => createElement(ThemeProvider, { children: story(), theme }),
    withReactQuery,
];

export const loaders = [mswLoader];
export const tags = ["autodocs"];
