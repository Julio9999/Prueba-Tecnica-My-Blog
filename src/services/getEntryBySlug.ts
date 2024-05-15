import jsonData from "../../public/data/data.json"


export const getEntryBySlug = async(slug: string) => {
    const entries = jsonData
    const filteredEntry = entries?.items.find(entry => entry.slug === slug)! as BlogEntry
    return filteredEntry;
}