import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-remix-react-router";

import { Navbar } from "./MaterialNavbar";

const meta = {
    component: Navbar,
    decorators: [withRouter],
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    decorators: [],
};
