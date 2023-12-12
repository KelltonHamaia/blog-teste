import { Post } from "@/types/Post";

type addAction = {
    type: "add",
    payload: {
        title: string,
        body: string,
    }
}

type removeAction = {
    type: "remove",
    payload: {
        id: number
    }
}


export type PostActions = addAction | removeAction;

export const postReducer = (post: Post[], actions: PostActions) => {
    switch (actions.type) {
        case "add":
            return [...post, {
                id: post.length,
                title: actions.payload.title,
                body: actions.payload.body
        }]
        
        case "remove":
            return post.filter(item => item.id !== actions.payload.id);

        default: return post;
    }
}