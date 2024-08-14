import { NavItem } from "./NavItem";

import { paths } from "shared/Router";
import { t } from "utils";

export const useNavItems = () => {
    const isAuthenticated = true; // Would be implemented smth like: const isAuthenticated = useAuthStore((store) => store.isAuthenticated);
    return isAuthenticated
        ? PUBLIC_NAV_ITEMS.concat(PRIVATE_NAV_ITEMS)
        : PUBLIC_NAV_ITEMS;
};

export const PUBLIC_NAV_ITEMS: Array<NavItem> = [
    {
        label: t("Collected consents"),
        href: paths.collectedConsentsRoutePath,
    },
    {
        label: t("Give consent"),
        href: paths.giveConsentRoutePath,
    },
];

export const PRIVATE_NAV_ITEMS: Array<NavItem> = [];
