'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";

export const SearchComponent = () => {

    const router = useRouter()
    const [searchValue, setSearchValue] = useState('')

    const handleClick = (e:any) => {
        e.preventDefault();
        if (!searchValue){
            router.push(`/`)
        } else{
            router.push(`/search?title=${searchValue}`)
        }
    }

    const handleChange = (e:any) => {
        const value = e.target.value 
        setSearchValue(() => value)
    }

    return (
        <form className="max-w-md">
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Buscar</label>
            <div className="relative flex flex-col md:flex-row items-start md:items-stretch justify-center gap-2">
                <input type="search" id="default-search" className="block w-full p-2  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buscar por título" onChange={handleChange} />
                <button type="submit" onClick={(e:any) => handleClick(e)} className="text-white  end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buscar</button>
            </div>
        </form>
    )
}