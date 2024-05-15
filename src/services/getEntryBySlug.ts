import { BlogEntries } from '@/components';
import jsonData from "../../public/data/data.json"


export const getEntryBySlug = async(slug: string) => {
    const entries = jsonData as BlogEntries
    if(entries){
        const filteredEntry = entries?.items.find(entry => entry.slug === slug)! as BlogEntry
        return filteredEntry;
    }else{
        return {} as BlogEntry
    }
}