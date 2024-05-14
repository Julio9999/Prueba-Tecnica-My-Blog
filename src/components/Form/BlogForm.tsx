'use client';

import { SubmitHandler, useForm, FormProvider } from "react-hook-form";
import { FormContentSchema } from "@/helpers/interfaces/schemas/formContentSchema";
import { CustomInput } from "./CustomInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { formContentSchema } from "@/helpers/schemas/formContentSchema";
import { CustomTipTap } from "./CustomTipTap";
import { useEffect } from "react";


export const BlogForm = () => {

    const methods = useForm<FormContentSchema>({
        mode: 'onChange',
        resolver: yupResolver(formContentSchema),
        defaultValues: formContentSchema.cast({})
    })

    const content = methods.watch('content')

    const submitForm: SubmitHandler<FormContentSchema> = (data) => {
        console.log(data)
    }

    useEffect(() => {
        const subscription = methods.watch((value, { name, type }) =>
          console.log(value, name, type)
        )
        return () => subscription.unsubscribe()
      }, [methods.watch])
    


    return (
        <FormProvider {...methods}>
            <form className="mx-auto xl:container" onSubmit={methods.handleSubmit(submitForm)}>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <CustomInput<FormContentSchema>
                        name="title"
                        label="Titulo"
                    />

                    <CustomInput<FormContentSchema>
                        name="slug"
                        label="Slug"
                    />

                    <div className="col-span-2 h-full">
                    <CustomTipTap<FormContentSchema>
                        name="content"
                    />
                    </div>

                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 col-span-2">Enviar</button>
                </div>
            </form>

        </FormProvider>

    )
}
