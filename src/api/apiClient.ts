import axiosInstance from './axiosInstance';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

const apiClient = {
    get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return axiosInstance.get<T>(url, config);
    },
    post<T >(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return axiosInstance.post<T>(url, data, config);
    },
    put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return axiosInstance.put<T>(url, data, config);
    },
    delete<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return axiosInstance.delete<T>(url, config);
    },
};

export default apiClient;