'use client'
import { useEffect, useState } from "react"
import DOMPurify from "isomorphic-dompurify"
import { EntryDetailsSkeleton } from ".."
import { usePathname } from "next/navigation"


export const EntryDetails = () => {

    const [entry, setEntry] = useState({} as BlogEntry)
    const [loading, setLoading] = useState(true);
    const pathName = usePathname();
    const slug = pathName.split('/')[2] 
    

    useEffect(() => {
         fetch(`/api/getEntryBySlug/${slug}`).then(async (response) => {
             console.log(response)
             const json = await response.json()
             const entry = json.entry as BlogEntry
             setEntry(entry)
             setLoading(false)
         })
    }, [])

    return (
        <>
            {
                loading
                    ? <EntryDetailsSkeleton />
                    : <div className="xl:container mx:auto mb-12  w-full flex items-center justify-center ">
                        <div className="flex flex-col items-center  border-gray-200 rounded-lg shadow    w-full justify-center">
                            <div className="flex flex-col w-full border rounded-md  p-4 leading-normal items-start justify-start">
                                <h5 className="mb-2  w-full text-start text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{entry?.title}</h5>
                                <div className="mb-3 font-normal min-h-20 text-gray-700 dark:text-gray-400"
                                    dangerouslySetInnerHTML={{
                                        __html: DOMPurify.sanitize(entry?.content)
                                    }}
                                />
                                <div className=" flex flex-col items-center justify-end w-full">
                                    <p className="text-end w-full">Publicado el: {entry?.date}</p>
                                    <p className="text-end w-full">a las: {entry?.hour} horas</p>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}