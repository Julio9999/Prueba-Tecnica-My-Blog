import { getJsonData } from "./getJsonData"

export const getEntryBySlug = async(slug: string) => {
    const entries = await  getJsonData()
    const filteredEntry = entries?.items.find(entry => entry.slug === slug)!
    return filteredEntry;
}