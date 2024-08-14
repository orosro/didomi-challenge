import { GridColDef } from "@mui/x-data-grid";
import { ConsentingUser } from "../../infrastructure/consentsQuery";
import React from "react";
import { DeleteButton } from "./DeleteButton";

export const getConsentColumns = (): GridColDef<ConsentingUser>[] => {
    return [
        { field: "id", headerName: "ID" },
        { field: "fullName", headerName: "Full name", flex: 1 },
        {
            field: "email",
            headerName: "Email",
            type: "string",
            flex: 1,
        },
        {
            field: "consents",
            headerName: "Consents given for",
            flex: 2,
            valueGetter: (value, row) =>
                `${row.consents.newsletter},${row.consents.ads},${row.consents.statistics}`,
        },
        {
            field: "actions",
            headerName: "Actions",
            flex: 0,
            renderCell: (params) => {
                return <DeleteButton id={params.row.id} />;
            },
        },
    ];
};
