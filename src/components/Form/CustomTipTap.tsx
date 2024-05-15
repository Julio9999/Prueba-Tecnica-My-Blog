import { Controller } from "react-hook-form"
import { ErrorMessage } from "@hookform/error-message";
import { Tiptap } from "..";

interface Props<T> {
    name: keyof T;
}

export function CustomTipTap<T>({ name }: Props<T>) {
    return (
        <Controller
            name={name.toString()}
            render={({ field }) => (
                <>
                    <Tiptap
                        content={field.value}
                        onChange={field.onChange}
                    />

                    <ErrorMessage
                        name={name.toString()}
                        render={({ message }) => <p className="text-red-700">{message}</p>}
                    />
                </>
            )}
        />
    )
}