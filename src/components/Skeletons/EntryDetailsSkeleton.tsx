export const EntryDetailsSkeleton = () => {
    return (
        <div className="xl:container mx:auto mb-12   w-full flex items-center justify-center ">
            <div className="flex flex-col items-center  border-gray-200 rounded-lg shadow    w-full justify-center">
                <div className="flex flex-col w-full border rounded-md  p-4 leading-normal items-start justify-start">
                    <h5 className="animate-pulse  w-full text-start text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
                        <span className="bg-slate-500 w-2/3 block h-4 rounded-sm"></span>
                    </h5>

                    <div className="mb-3 font-normal flex flex-col gap-2 min-h-20 animate-pulse w-full">
                        <span className="bg-slate-500 w-1/3 block h-4 rounded-sm"></span>
                        <span className="bg-slate-500 w-4/3 block h-4 rounded-sm"></span>
                        <span className="bg-slate-500 w-2/3 block h-4 rounded-sm"></span>
                    </div>
                    
                    <div className="mb-3 font-normal flex flex-col gap-2 min-h-20 animate-pulse w-full">
                        <span className="bg-slate-500 w-1/3 block h-4 rounded-sm"></span>
                        <span className="bg-slate-500 w-4/3 block h-4 rounded-sm"></span>
                        <span className="bg-slate-500 w-2/3 block h-4 rounded-sm"></span>
                    </div>
                    <div className=" animate-pulse flex flex-col gap-2 items-end justify-end w-full">
                        <span className="bg-slate-500 w-1/2 block h-4 rounded-sm"></span>
                        <span className="bg-slate-500 w-1/3 block h-4 rounded-sm"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}