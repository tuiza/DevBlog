import AsyncStorage from "@react-native-async-storage/async-storage"
import api from "./api";

export async function getFavorite() { 
    const data = await AsyncStorage.getItem('@favCategory')

    async function getPosts() {
        const response = await api.get(`api/categories/${data}?fileds=name&populate=posts,posts.cover`)
        return response.data?.data?.attributes?.posts?.data
    }

    if (data !== null) {
        return await getPosts()
    } else {
        return []
    }
}

export async function setFavorite(categoryId) {
    await AsyncStorage.setItem('@favCategory', String(categoryId)) 
    const response = await getFavorite()
    return response
}