import { SearchComponent, SortComponent } from "@/components";
import { MoveDown } from "lucide-react";

export default function SearchBarLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <div className="w-full flex px-4 gap-5 md:items-center md:px-10 text-left mb-8" >
                <div className="w-full">
                <SearchComponent />
                </div>
                <div className="w-full flex ">
                    <SortComponent />
                </div>
            </div>
            {children}
        </div>
    );
}
