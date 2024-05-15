type BlogEntry = {
    title: string;
    content: string;
    slug: string;
    id: string;
    date: string;
}

type BlogEntries = {
    items: BlogEntry[]
}