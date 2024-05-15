'use client';

import { SubmitHandler, useForm, FormProvider } from "react-hook-form";
import { CustomInput } from "./CustomInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { CustomTipTap } from "./CustomTipTap";
import { IFormSchema, formSchema } from "@/helpers";
import { ErrorToast, SuccessToast } from "..";

export const BlogForm = () => {

    const methods = useForm<IFormSchema>({
        mode: 'onChange',
        resolver: yupResolver(formSchema),
        defaultValues: formSchema.cast({})
    })

    const submitForm: SubmitHandler<IFormSchema> = async (data) => {

        methods.reset()
        try {
            const res = await fetch('/api/saveData', {
                method: 'POST',
                body: JSON.stringify(data)
            })
            SuccessToast({ message: 'Entrada creada con éxito' })

        } catch (error) {
            ErrorToast({ message: 'Sucedio un error inesperado' })
        }
    }

    return (
        <>
            <FormProvider {...methods}>
                <form className="mx-auto xl:container" onSubmit={methods.handleSubmit(submitForm)}>
                    <div className="grid gap-6 mb-6  md:grid-cols-2">
                        <CustomInput<IFormSchema>
                            name="title"
                            label="Titulo"
                        />

                        <div className="col-span-2 h-full">
                            <CustomTipTap<IFormSchema>
                                name="content"
                            />
                        </div>

                    </div>
                </form>

            </FormProvider>

        </>

    )
}
