/* es-lint-disable no-console */
import { DataGrid } from "@mui/x-data-grid";
import { useConsentsQuery } from "../../infrastructure";
import React from "react";
import { getConsentColumns } from "./getConsentColumns";

export const ConsentsTable = () => {
    const columns = getConsentColumns();
    const { data, isError } = useConsentsQuery({
        keepPreviousData: true,
    });

    if (isError) {
        return "Hmm... seems to be an errror";
    }

    return (
        <DataGrid
            rows={data}
            columns={columns}
            initialState={{
                pagination: {
                    paginationModel: { page: 0, pageSize: 2 },
                },
            }}
            pageSizeOptions={[2, 3]}
            disableRowSelectionOnClick
        />
    );
};
