export const BlogEntrySkeleton = () => {
    return (
        <div className=" py-2 py h-80 lg:col-span-1 md:col-span-2 col-span-4">
            <div className="max-w-sm p-6 bg-white h-full   rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col gap-2 hover:bg-gray-900    py-4 ">
                <div className="flex-1">
                    <h5 className="mb-5 line-clamp-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white animate-pulse">
                        <span className="bg-slate-500 w-full block h-4 rounded-sm"></span>
                    </h5>

                    <div className="mb-3 animate-pulse font-normal text-gray-700 dark:text-gray-400 line-clamp-4 h-24 flex flex-col gap-2">
                        <span className="bg-slate-500 w-2/3 block h-4 rounded-sm"></span>
                        <span className="bg-slate-500 w-2/3 block h-4 rounded-sm"></span>
                        <span className="bg-slate-500 w-full block h-4 rounded-sm"></span>
                        <span className="bg-slate-500 w-2/3 block h-4 rounded-sm"></span>
                        <span className="bg-slate-500 w-1/3 block h-4 rounded-sm"></span>
                    </div>

                    <div className="mb-3 animate-pulse font-normal text-gray-700 dark:text-gray-400 line-clamp-4 h-24 flex flex-col gap-2">
                        <span className="bg-slate-500 w-2/3 block h-4 rounded-sm"></span>
                        <span className="bg-slate-500 w-2/3 block h-4 rounded-sm"></span>
                        <span className="bg-slate-500 w-full block h-4 rounded-sm"></span>
                        <span className="bg-slate-500 w-2/3 block h-4 rounded-sm"></span>
                        <span className="bg-slate-500 w-1/3 block h-4 rounded-sm"></span>

                        
                        
                    </div>

                </div>

            </div>
        </div>
    )
}