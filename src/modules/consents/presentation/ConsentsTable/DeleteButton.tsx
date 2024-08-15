import { useDeleteConsentMutation } from "../../infrastructure";
import Button from "@mui/material/Button";

export type DeleteButtonProps = {
    id: string;
};

export const DeleteButton = ({ id }: DeleteButtonProps) => {
    // TODO: this becomes a smart component, is there any way of making it dumb?
    //  There is, we can pass a delete action as a prop, but we still need to initialize a mutation for each
    //  is it worth the complication?
    const deleteMutation = useDeleteConsentMutation();

    return (
        <Button
            onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                deleteMutation.mutate(id);
            }}
            name="delete-consent"
        >
            {deleteMutation.isIdle ? "x" : "Thinking.."}
        </Button>
    );
};
