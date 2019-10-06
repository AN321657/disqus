import { Timestamp } from "rxjs";

export interface Disqus{
    name: string,
    comment: string,
    time: number,
    reply: Array<any>,
    displayCommentBox:boolean,
    imageUrl:string
}