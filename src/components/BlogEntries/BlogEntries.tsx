import { getJsonData } from "@/services"
import { BlogEntry } from ".."



export const BlogEntries = async () => {

    const jsonData = await getJsonData()

    return (
        <div className="flex items-center flex-col justify-center gap-3 mb-8">
            <p className="text-3xl mb-7 text-center">Entradas mas recientes</p>
            <div className={`grid grid-cols-4 gap-8 md:px-10 px-4 `}>
                {jsonData?.items.map(item => (
                    <BlogEntry key={item.slug} {...item} />
                ))}
            </div>
        </div>

    )
}