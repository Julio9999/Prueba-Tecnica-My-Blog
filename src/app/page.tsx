import { BlogEntries } from "@/components";
import { revalidatePath } from "next/cache";


export default function Home() {
  revalidatePath('/', 'layout')
  return (
    <main className="flex flex-col items-center justify-between mt-10 xl:container  mx-auto">
      <BlogEntries />
    </main>
  );
}
