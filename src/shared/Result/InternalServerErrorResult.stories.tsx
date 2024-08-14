import type { Meta, StoryObj } from "@storybook/react";

import { GenericErrorResult } from "./GenericErrorResult";
import Button from "@mui/material/Button";

const meta = {
    component: GenericErrorResult,
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof GenericErrorResult>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithAction: Story = {
    args: {
        children: <Button>Try again</Button>,
    },
};
