import { PostContext } from "@/contexts/PostContext";
import { useContext, useState } from "react"

export const PostInputs = () => {

    const ctx = useContext(PostContext);

    const [title, setTitle] = useState(""); 
    const [body, setBody] = useState("");

    const handleAddPost = () => {
        if (title.trim() != "" && body.trim() != "") {
            ctx?.dispatch({
                type: "add",
                payload: {
                    title,
                    body
                }
            })
        }
    }

    return (
        <div className="flex flex-col w-full gap-5 my-5 text-white">
            <input
                className="px-3 py-2 bg-transparent border-b border-purple-700 outline-none"
                type="text" 
                value={title}
                onChange={e => setTitle(e.target.value)} 
            />
            <input
                className="px-3 py-2 bg-transparent border-b border-purple-700 outline-none"
                type="text" 
                value={body}
                onChange={e => setBody(e.target.value)} 
            />
            <button
                className="px-3 py-2 text-2xl font-bold bg-purple-400 rounded"
                onClick={handleAddPost}
            >
                Enviar post!
            </button>
        </div>
    )
}