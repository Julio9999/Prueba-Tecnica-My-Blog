import jsonData from "../../public/data/data.json"

export const getEntriesByTitle = (title: string) => {
    const regex = new RegExp(title, 'i')
    const filteredEntries = jsonData.items.filter(entry => regex.test(entry.title))
    const filteredBlogEntries: BlogEntries = {
        items: filteredEntries
    }
    return filteredBlogEntries;
}