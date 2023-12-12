"use client"

import { Header } from "@/components/Header";
import { PostInputs } from "@/components/PostInputs";
import { PostItem } from "@/components/PostItem";
import { ContextProvider } from '@/contexts/PostContext'
import Link from "next/link";

const Page = () => {
  return (
    <ContextProvider>
      <div className="container flex flex-col mx-auto prose">
        <Header />
        <PostInputs />
        <PostItem />

        <button className="px-3 py-2 rounded bg-emerald-400">
            <Link href={"/sobre"}>Ir para sobre</Link>
        </button>
      </div>
    </ContextProvider>
  );

}

export default Page;