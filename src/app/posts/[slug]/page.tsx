import { getEntryBySlug } from "@/services"
import DOMPurify from "isomorphic-dompurify"
import Link from "next/link"

interface Props {
    params: {
        slug: string
    }
}


const Page = async ({ params }: Props) => {

    const slug = params.slug

    const entry = await getEntryBySlug(slug)

    return (
        <div className="mt-16 flex flex-col md:px-10 px-4">
            
            <div className="xl:container mx:auto mb-12  w-full flex items-center justify-center ">
                <div className="flex flex-col items-center  border-gray-200 rounded-lg shadow    w-full justify-center">
                    <div className="flex flex-col w-full border rounded-md  p-4 leading-normal items-start justify-start">
                        <h5 className="mb-2  w-full text-start text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{entry.title}</h5>
                        <div className="mb-3 font-normal min-h-20 text-gray-700 dark:text-gray-400"
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(entry.content)
                            }}
                        />
                        <div className=" flex flex-col items-center justify-end w-full">
                        <p className="text-end w-full">Publicado el: {entry.date}</p>
                        <p className="text-end w-full">a las: {entry?.hour} horas</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page;

