import { PostActions, postReducer } from "@/reducers/postReducer";
import { Post } from "@/types/Post";
import { Dispatch, ReactNode, createContext, useReducer, useState } from "react";

type ContextType = {
    post: Post[],
    dispatch: Dispatch<PostActions>
}

export const PostContext = createContext<ContextType | null>(null);

type Props = {
    children: ReactNode
}
export const ContextProvider = ({ children }: Props) => {

    const [post, dispatch] = useReducer(postReducer, []);

    return (
        <PostContext.Provider value={{post, dispatch}}>
            {children}
        </PostContext.Provider>
    )
}



