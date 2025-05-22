type Comments = {
    user : string,
    text : string
}

type Post = {
    "influencer_id": string,
    "influencer_name": string,
    "post_content": string,
    "post_type": string,
    "created_at": string,
    "hashtags": [string],
    "likes_count": number,
    "comments": Array<Comments>
}

type User = {
    id: string;
    profileImage: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    avatar: string;
}

export type {Post , Comments, User}