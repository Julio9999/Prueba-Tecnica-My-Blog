'use client';
import { BlogEntriesSkeleton } from ".."
import { BlogEntriesGrid } from "./BlogEntriesGrid";
import { useBlogEntries } from "@/hooks/useBlogEntries";


interface Props {
    defaultValues?: BlogEntries;
}

export const BlogEntries = ({ defaultValues }: Props) => {


    const {
        loading,
        jsonData
    } = useBlogEntries({defaultValues})
    

    return (
        <div className="flex items-center flex-col justify-center gap-3 mb-8   w-full md:px-4 px-10 ">
            <div className={`grid grid-cols-4 gap-8  w-full`}>
                {
                    loading ?
                        <>
                            <BlogEntriesSkeleton />
                        </> :
                        <>
                            <BlogEntriesGrid entries={jsonData.items} />
                        </>
                }
            </div>
        </div>

    )
}
