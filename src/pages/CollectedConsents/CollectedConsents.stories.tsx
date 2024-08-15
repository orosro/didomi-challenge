import { Meta, StoryObj } from "@storybook/react";
import { getConsentsHandler, deleteConsentHandler } from "../../mocks/handlers";

import { Component } from "./index";
import { collectedConsentsLoader } from "./loader";

const meta = {
    title: "pages/CollectedConsents",
    component: Component,
    parameters: {
        reactRouter: {
            loader: collectedConsentsLoader,
        },
    },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    parameters: {
        msw: {
            handlers: [getConsentsHandler(), deleteConsentHandler()],
        },
    },
};
