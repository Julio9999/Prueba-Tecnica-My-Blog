'use client'
import { Sort } from "@/helpers/constans/sortEnum"
import { useFilterStore } from "@/stores"
import { MoveDown, MoveUp } from "lucide-react"
import { useState } from "react"

export const SortComponent = () => {

    const changeSortType = useFilterStore(state => state.changeSortType)
    const sortType = useFilterStore(state => state.sortType)

   

    const handleChangeSort = () => {
        changeSortType()
    }

    return (
        <div 
        onClick={() => handleChangeSort()}
        className="cursor-pointer justify-center flex flex-col md:flex-row select-none items-center"
        >
            Ordenamiento {sortType === Sort.ascending ? 'descendente': 'ascendente' }
            {
                sortType === Sort.descending 
                ? <MoveUp />
                : <MoveDown />
            }
        </div>
    )
}