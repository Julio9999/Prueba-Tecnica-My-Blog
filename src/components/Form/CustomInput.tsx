import { Controller } from "react-hook-form"

interface Props <T> {
    name: keyof T;
    label: string;
}

export function CustomInput<T>({ name, label }: Props<T>){
    return (
        <Controller name={name.toString()} render={({ field }) => (
            <div>
                <label htmlFor={name.toString()} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
                <input {...field} type="text" id={name.toString()} name={name.toString()} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
        )} />
    )
}