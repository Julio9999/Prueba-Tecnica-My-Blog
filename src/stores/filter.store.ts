import { Sort } from "@/helpers/constans/sortEnum";
import { StateCreator, create } from "zustand";


interface FilterState {
    sortType: Sort,
    changeSortType: () => void;
}

const StoreApi: StateCreator<FilterState> = (set, get) => ({

    sortType: Sort.descending,
    changeSortType:() => {
        const {sortType} = get();

        if(sortType === Sort.descending){
            set({sortType: Sort.ascending})
        }else{
            set({sortType: Sort.descending})
        }
    },
    
})

export const useFilterStore = create<FilterState>()(
    StoreApi
)