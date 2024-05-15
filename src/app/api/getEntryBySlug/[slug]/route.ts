import { getEntryBySlug } from "@/services"

export async function GET(request: Request, {params}: {params: {slug: string}}) {
 
    const slug = params.slug
    const entry = await getEntryBySlug(slug)
    

    return Response.json({entry})  
}