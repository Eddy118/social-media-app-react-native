import apiClient from "../api/apiClient";
import {genericError} from '../constants';
import {Post} from "../shared/type/commonTypes.ts";

type getPostsListingProps = {
    page: number;
    pageSize: number;
};

export const getPostsListing = async ({
                                          page,
                                          pageSize,
                                      }: getPostsListingProps) : Promise<Post[]> => {
    try {
        const response  = await apiClient.get<{ data: Post[] }>(`posts`);
        return response.data as unknown as Post[];
    } catch (err: any) {
        const errorMsg = err?.message ?? genericError;
        console.error("Error fetching posts:", errorMsg);
        return []; // return an empty array or throw the error depending on your use case
    }
};

export const getTrendingTags = async () : Promise<string[] | undefined> => {
    try {
        const {data }  = await apiClient.get<Post[]>(`posts`);
        const Tags  : string[]  = []
          data.map((post: Post) => {
            post.hashtags.map((hashtag: string) => Tags.push(hashtag));
        })
        return Tags as unknown as Array<string>;
    } catch (err: any) {
        const errorMsg = err?.message ?? genericError;
        // showErrorToast({ message: errorMsg });
    }
};

export const getSelectedPokemonDetails = async (url: string) => {
    try {
        const speciesUrl = url?.split("v2")[1];
        const { data } = await apiClient.get(speciesUrl);
        return data;
    } catch (err: any) {
        const errorMsg = err?.message ?? genericError;
        // showErrorToast({ message: errorMsg });
    }
};