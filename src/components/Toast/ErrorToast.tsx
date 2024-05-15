import { IToast } from "@/helpers";
import { toast } from "react-toastify";

export const ErrorToast = ({ message}: IToast) => {
    return (
        toast.error(message, {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        })
    )


}
