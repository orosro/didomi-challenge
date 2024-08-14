import { buildUrl, httpService, queryClient, useQuery } from "utils";
import { useMutation, UseQueryOptions } from "@tanstack/react-query";
import { ConsentingUserPayload } from "./types/ConsentingUser";
import { Logger } from "utils/logger";

export type ConsentingUser = {
    id: string;
    fullName: string;
    email: string;
    consents: {
        newsletter: Boolean;
        ads: Boolean;
        statistics: Boolean;
    };
};

export const toConsentingUserView = (
    user: ConsentingUserPayload
): ConsentingUser => {
    return user; // normally we would have a bigger transformation happening here
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
        Logger.info(`>>>>>   deleteConsent, ${res}`);
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
        Logger.info(`>>>>>   add new Consent, ${res}`);
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

// TODO: Implement a toConsentView FN and update the translation mechanism
