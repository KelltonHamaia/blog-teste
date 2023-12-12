"use client"
import { PostContext } from "@/contexts/PostContext";
import { useEffect, useContext } from "react";
import Link from "next/link"; 
    
const page = () => {

    const ctx = useContext(PostContext);
    
    useEffect(() => {
        console.log(ctx)
    }, [])


    return (
        <div>
            <p>Total de posts: {ctx?.post.length}</p>
            <Link href={"/"}>Voltar</Link>
        </div>
    )
}

export default page;