import { SearchComponent } from "@/components";

export default function SearchBarLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <div className="w-full px-4 md:px-10 text-left mb-8" >
                <SearchComponent />
            </div>
            {children}
        </div>
    );
}
