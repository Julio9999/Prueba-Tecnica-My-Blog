import { BlogEntries, SearchComponent } from "@/components";
import { getEntriesByTitle } from "@/services";

interface Props {

    searchParams: {
        title: string
    },
    params: {
        title: string;
    }
}


export default function Page({ searchParams, params }: Props) {

    const title = searchParams.title

    const entries = getEntriesByTitle(title)


    return (
        <main className="flex flex-col items-center justify-between mt-10">
            <BlogEntries defaultValues={entries} />
        </main>
    );
}
