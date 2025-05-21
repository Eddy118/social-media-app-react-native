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

export type {Post , Comments}