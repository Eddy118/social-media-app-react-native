import apiClient from "../api/apiClient";
import {genericError} from '../constants';
import {Posts} from "../shared/type/commonTypes.ts";

type getPostsListingProps = {
    page: number;
    pageSize: number;
};

export const getPostsListing = async ({
                                          page,
                                          pageSize,
                                      }: getPostsListingProps) : Promise<Posts[]> => {
    try {
        const response  = await apiClient.get<{ data: Posts[] }>(`posts?page=${page}&limit=${pageSize}`);
        return response.data as unknown as Posts[];
    } catch (err: any) {
        const errorMsg = err?.message ?? genericError;
        console.error("Error fetching posts:", errorMsg);
        return []; // return an empty array or throw the error depending on your use case
    }
};

export const getPokemonDetails = async (name: string) => {
    try {
        const { data } = await apiClient.get(`pokemon/${name}`);
        return data;
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