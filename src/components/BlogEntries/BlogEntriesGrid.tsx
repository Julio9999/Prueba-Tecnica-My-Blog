'use client';

import { usePathname } from "next/navigation";
import { BlogEntry } from "./BlogEntry";

interface Props {
    entries: BlogEntry[];
}

export const BlogEntriesGrid = ({ entries }: Props) => {

    const pathName = usePathname();

    if(entries.length){
        return (
            <>
                {entries.map((item) => (
                    <BlogEntry key={item.slug} {...item} />
                ))}
            </>
        )
    } else if(!entries.length && pathName.includes('search')){
        return (<div className="col-span-full text-center py-4 text-3xl font-semibold">La búsqueda no arrojo ningún resultado.</div>)
    }else {
        return (<div className="col-span-full text-center py-4 text-3xl font-semibold">Blog sin entradas.</div>)
    }

}