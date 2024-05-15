'use client';
import { BlogEntriesSkeleton, BlogEntry } from ".."
import { useEffect, useState } from "react";


interface Props {
    defaultValues?: BlogEntries;
}

export const BlogEntries = ({ defaultValues }: Props) => {


    const [jsonData, setJsonData] = useState<BlogEntries>(defaultValues ?? {} as BlogEntries)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (defaultValues) {
            setLoading(false)
        } else {
            fetch('/data/data.json').then(async (response) => {
                const json = await response.json() as BlogEntries
                setJsonData(json)
                setLoading(false)
            })
        }


    }, [])

    return (
        <div className="flex items-center flex-col justify-center gap-3 mb-8   w-full md:px-4 px-10 ">
            <div className={`grid grid-cols-4 gap-8  w-full`}>
                {
                    loading ?
                        <>
                            <BlogEntriesSkeleton />
                        </> :
                        <>
                            {jsonData?.items?.map(item => (
                                <BlogEntry key={item.slug} {...item} />
                            ))}
                        </>
                }
            </div>
        </div>

    )
}
