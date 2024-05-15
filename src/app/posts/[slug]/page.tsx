import { EntryDetails } from "@/components"
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
            
            <EntryDetails slug={slug} />
        </div>
    )
}

export default Page;

