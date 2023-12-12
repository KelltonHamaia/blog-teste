import { useContext } from "react";
import { PostContext } from "@/contexts/PostContext";
export const Header = () => {

    const ctx = useContext(PostContext)

    return (
        <header>
            <h1 className="my-3 text-3xl text-center">Blog massa- total de posts: {ctx?.post.length }</h1>
        </header>
    )
}