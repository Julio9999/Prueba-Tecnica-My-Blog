type BlogEntry = {
    title: string;
    content: string;
    slug: string;
    id: string;
    date: string;
    hour: string;
}

type BlogEntries = {
    items: BlogEntry[]
}