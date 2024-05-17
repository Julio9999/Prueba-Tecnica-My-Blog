import { useFilterStore } from "@/stores";
import { useEffect, useState } from "react";

interface Props {
    defaultValues?: BlogEntries
}

export const useBlogEntries = ({ defaultValues }: Props) => {
    const [jsonData, setJsonData] = useState<BlogEntries>(defaultValues ?? {} as BlogEntries)
    const [loading, setLoading] = useState(false);
    const sortType = useFilterStore(state => state.sortType)

    useEffect(() => {
         if (defaultValues) return;
        
         setLoading(() => true)
         fetch('/data/data.json').then(async (response) => {
             const json = await response.json() as BlogEntries
             setJsonData(json)
             setLoading(() => false)
         })
    }, [])

    useEffect(() => {
        if (Object.keys(jsonData).length === 0) return;
        setLoading(() => true)
        const timer = setTimeout(() => {
            const sortedJson = {
                items: jsonData ? [...jsonData.items].reverse() : [] as BlogEntry[],
            };
            setJsonData(sortedJson);
            setLoading(() => false);
        }, 350);
        return () => clearTimeout(timer)
    }, [sortType])


    return {
        jsonData,
        loading
    }
}