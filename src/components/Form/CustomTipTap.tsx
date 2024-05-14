import { Controller } from "react-hook-form"
import Tiptap from "../tipTap/Tiptap";

interface Props<T> {
    name: keyof T;
}

export function CustomTipTap<T>({ name }: Props<T>) {
    return (
        <Controller
            name={name.toString()}
            render={({ field }) => (
                <Tiptap
                    content={field.value}
                    onChange={field.onChange}
                />
            )}
        />
    )
}