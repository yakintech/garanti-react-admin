import { axiosInstance } from "../config/axiosInstance"


export const baseApi = {

    getAll: async<T> (url: string) => {
        try {
            const response = await axiosInstance.get<T>(url)
            return response.data
        } catch (error) {
            console.error(`Error fetching data base api:${url}`, error)
            throw error
        }
    },
    get: async<T> (url: string, id: number) => {
        try {
            const response = await axiosInstance.get<T>(`${url}/${id}`)
            return response.data
        } catch (error) {
            console.error(`GET BY ID Error fetching data base api:${url}`, error)
            throw error
        }
    },
    post: async<T> (url: string, data: any) => {
        try {
            const response = await axiosInstance.post<T>(url, data)
            return response.data
        } catch (error) {
            console.error(`POST Error fetching data base api:${url}`, error)
            throw error
        }
    },
    put: async<T> (url: string, data: any) => {
        try {
            const response = await axiosInstance.put<T>(url, data)
            return response.data
        } catch (error) {
            console.error(`PUT Error fetching data base api:${url}`, error)
            throw error
        }
    },
    delete: async<T> (url: string, id: number) => {
        try {
            const response = await axiosInstance.delete<T>(`${url}/${id}`)
            return response.data
        } catch (error) {
            console.error(`Delete Error fetching data base api:${url}`, error)
            throw error
        }
    }

}