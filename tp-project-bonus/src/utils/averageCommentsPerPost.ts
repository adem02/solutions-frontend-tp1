import { PostComments } from "../models/PostComments";

export const averageCommentsPerPost = (posts: PostComments[]) => {
    return posts.reduce((acc, curr) => acc + curr.numberOfComments, 0) / posts.length
}