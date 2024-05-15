import { IToast } from "@/helpers";
import { toast } from "react-toastify";


export const SuccessToast = ({ message }: IToast) => {
    return (
        toast.success(message, {
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
