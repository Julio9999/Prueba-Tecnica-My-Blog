import * as yup from "yup";
import { FormContentSchema } from "../interfaces/schemas/formContentSchema";

export const formContentSchema: yup.ObjectSchema<FormContentSchema> = yup.object({
    slug: yup.string().required("Este campo es requerido").default(''),
    title: yup.string().required("Este campo es requerido").default(''),
    content: yup.string().required("Este campo es requerido").default('')
})