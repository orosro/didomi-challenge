// eslint-disable-next-line no-restricted-imports
import { createBrowserRouter, redirect } from "react-router-dom";

import { Layout } from "shared/Layout";

import { collectedConsentsLoader } from "./CollectedConsents/loader";

import { paths } from "shared/Router";

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                index: true,
                loader: async () => redirect(paths.collectedConsentsRoutePath),
            },
            {
                path: paths.collectedConsentsRoutePath,
                loader: collectedConsentsLoader,
                lazy: () => import("./CollectedConsents"),
            },
            {
                path: paths.giveConsentRoutePath,
                lazy: () => import("./GiveConsent"),
            },
        ],
    },
]);
