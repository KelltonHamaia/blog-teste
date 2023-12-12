import { PostContext } from "@/contexts/PostContext";
import { useContext } from "react";

export const PostItem = () => {    
    const ctx = useContext(PostContext);
    
    if (ctx?.post.length === 0) {
        return (
            <div>
                Sem posts no momento
            </div>
        )
    } else {
        return (
            <div> 
                {ctx?.post.map(item => (
                    <div key={item.id} className="my-5 border-b border-b-gray-700">
                        <h1>{ item.id}.{ item.title }</h1>
                        <div>{ item.body }</div>
                    </div>
                ))}
            </div>
        )
    }

}