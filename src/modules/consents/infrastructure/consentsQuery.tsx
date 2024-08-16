import { buildUrl, httpService, queryClient, t, useQuery } from "utils";
import { useMutation, UseQueryOptions } from "@tanstack/react-query";
import { ConsentingUserPayload } from "./types/ConsentingUser";

export type ConsentingUser = {
    id: string;
    fullName: string;
    email: string;
    consents: string;
};

export const toConsentingUserView = (
    user: ConsentingUserPayload
): ConsentingUser => {
    return {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
        consents: toConsentsView(user.consents).join(", "),
    }; // normally we would have a bigger transformation happening here
};

export const getConsentsQueryKey = () => ["consents"];

const getConsentsQuery = () => {
    return {
        queryKey: getConsentsQueryKey(),
        queryFn: (): Promise<ConsentingUser[]> => {
            return httpService
                .get<ConsentingUserPayload[]>(buildUrl("consents"))
                .then((res) => res.map(toConsentingUserView));
        },
    };
};

export const useConsentsQuery = (
    options?: UseQueryOptions<ConsentingUser[]>
) => {
    return useQuery({
        ...getConsentsQuery(),
        ...options,
    });
};

export const consentsLoader = async () =>
    queryClient.ensureQueryData(getConsentsQuery());

// TODO: maybe move this some other place. or make it BE drive?
export const deleteConsent = (id: string) => {
    return httpService.delete(buildUrl(`consents/${id}`)).then((res) => {
        return res;
    });
};

export const useDeleteConsentMutation = () => {
    return useMutation({
        mutationFn: deleteConsent,
        onSuccess: () => {
            queryClient.invalidateQueries(getConsentsQueryKey());
        },
        retry: false,
    });
};

export type AddConsentPayload = {
    fullName: string;
    email: string;
    consents: {
        newsletter: boolean;
        ads: boolean;
        statistics: boolean;
    };
};
export const addConsent = (newConsent: AddConsentPayload) => {
    return httpService.post(buildUrl("consents"), newConsent).then((res) => {
        return res;
    });
};

export const useAddConsentMutation = () => {
    return useMutation({
        mutationFn: addConsent,
        onSuccess: () => {
            queryClient.invalidateQueries(getConsentsQueryKey());
        },
        retry: false,
    });
};

type Consent = "newsletter" | "ads" | "statistics";
const consentsMessages: Record<Consent, string> = {
    newsletter: "Receive newsletter",
    ads: "Be shown targeted ads",
    statistics: "Contribute to anonymous visit statistics",
};

export const toConsentsView = (
    consents: AddConsentPayload["consents"]
): string[] => {
    const consentKeys: Consent[] = Object.keys(consents) as Consent[];

    // TODO: use reduce
    const userConsents: string[] = [];
    consentKeys.forEach((c) => {
        if (consents[c]) {
            userConsents.push(t(consentsMessages[c]));
        }
    });

    return userConsents;
};
