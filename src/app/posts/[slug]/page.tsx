import { EntryDetails } from "@/components"
import { revalidatePath } from "next/cache"

interface Props {
    params: {
        slug: string
    }
}


const Page = async ({ params }: Props) => {
    revalidatePath('/', 'layout')



    return (
        <div className="mt-16 flex flex-col md:px-10 px-4">
            
            <EntryDetails  />
        </div>
    )
}

export default Page;

