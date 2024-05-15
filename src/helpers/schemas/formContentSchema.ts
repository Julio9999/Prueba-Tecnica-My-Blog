import * as yup from "yup";
import { IFormSchema } from "..";


export const formSchema: yup.ObjectSchema<IFormSchema> = yup.object({
    title: yup.string().required("Este campo es requerido").default(''),
    content: yup.string().required("Este campo es requerido").default('')
})