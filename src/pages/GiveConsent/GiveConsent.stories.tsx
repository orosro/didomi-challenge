import { Meta, StoryObj } from "@storybook/react";
import { addConsentHandler } from "utils/handlers";

import { Component } from "./index";

const meta = {
    title: "pages/GiveConsent",
    component: Component,
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    parameters: {
        msw: {
            handlers: [addConsentHandler()],
        },
    },
};
