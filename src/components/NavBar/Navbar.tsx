'use client';
import Link from "next/link"
import clsx from 'clsx';
import { usePathname } from "next/navigation";



export const Navbar = () => {


    const pathName = usePathname()

    return (
        <nav className="flex items-center justify-between flex-wrap p-6 md:px-10 px-4 xl:container">
        
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow border rounded-md flex items-center p-4 gap-4">
                    
                    <Link href="/"   className={clsx("block lg:inline-block border rounded-md lg:mt-0 hover:text-white py-2 px-6 text-gray-700  dark:text-gray-400", {
                        "dark:bg-gray-800 dark:border-gray-700": (pathName == '/')
                    })}>
                        Blog
                    </Link>

                    <Link href="/admin" className={clsx("block lg:inline-block border rounded-md lg:mt-0 hover:text-white py-2 px-6 text-gray-700 dark:text-gray-400", {
                        "dark:bg-gray-800 dark:border-gray-700": (pathName == '/admin')
                    })}>
                        Crear Entrada
                    </Link>
                </div>
            </div>
        </nav>
    )
}