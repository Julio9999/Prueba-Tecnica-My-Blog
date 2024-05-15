'use client';
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";
import { useEffect, useRef, useState } from "react";


export const BlogEntry = (item: BlogEntry) => {

    const [intersecting, setIsIntersecting] = useState(false)
    const entryRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const options = {
            root: null,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsIntersecting(true);
                }else{
                    setIsIntersecting(false);
                }
            });
        }, options);

        if (entryRef.current) {
            observer.observe(entryRef.current);
        }

        return () => {
            if (entryRef.current) {
                observer.unobserve(entryRef.current);
            }
        };
    }, []);

    return (
        <div className="h-80 lg:col-span-1 w-full  md:col-span-2 col-span-4" ref={entryRef}>
            {
                intersecting && entryRef.current && 
                <div className="p-6 bg-white h-80 w-full  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col gap-2 hover:bg-gray-900    py-4 ">
                    <div className="flex-1">
                        <h5 className="mb-2 line-clamp-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>

                        <div className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-4 h-24"
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(item.content)
                            }}
                        />

                    </div>
                    <div className="text-end">
                        <Link href={`posts/${item.slug}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Leer entrada completa
                        </Link>
                    </div>
                </div>
            }

        </div>
    )
}
