import React, { useEffect, useState } from 'react';
import * as S from './styles.js'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import api from '../../services/api'
import CategoryItem from '../../components/CategoryItem/index.js'
import { getFavorite, setFavorite } from '../../services/favorite.js'

import FavoritePost from '../FavoritePost/index.js'
import PostItem from '../../components/PostItem/index.js'


export default function Home() {
  const navigation = useNavigation()

  const [categories, setCategories] = useState([])
  const [favCategory, setFavCategory] = useState([])
  const [hasFavorites, setHasFavorites] = useState()
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)

  async function loadData() {
    const category = await api.get("/api/categories?populate=icon")
    setCategories(category.data.data)
    await getListPosts()
  }

  async function handleFavorite(categoryId) {
    await setFavorite(categoryId)
  }

  async function loadFavorite() {
    const response = await getFavorite()
    setFavCategory(response)
  }

  async function getListPosts() {
    setLoading(true)
    const response = await api.get("api/posts?populate=cover&sort=createdAt:desc")
    setPosts(response.data.data)
    setLoading(false)
  }

  useEffect(() => {
    loadData()
    loadFavorite()
  }, [])

  useEffect(() => {
    loadFavorite()
  }, [favCategory])


  return (
    <S.SafeAreaView>
      <S.Header>
        <S.Title animation="slideInLeft">DevBlog</S.Title>
        <S.Button onPress={() => navigation.navigate('Search')}>
          <Feather name='search' size={24} color='#fff' />
        </S.Button>
      </S.Header>
      <S.Categories
        horizontal={true}
        animation='flipInX'
        delay={500}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddinRight: 12 }}
        data={categories}
        key={(item) => String(item.id)}
        renderItem={({ item }) => <CategoryItem item={item} favoriteId={() => handleFavorite(item.id)} />
        }
      />
      <S.Main>
        {favCategory.length !== 0 && (
          <S.FavoritesCategory
           
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={favCategory}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => <FavoritePost data={item} />}
          />
        )}
        <S.Text hasFavorites={favCategory.length > 0 ? '14px' : '45px'} >
          Conteúdos em alta
        </S.Text>
        <S.Posts
          horizontal={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddinRight: 12 }}
          data={posts}
          key={(item) => String(item.id)}
          renderItem={({ item }) => <PostItem data={item} />}
          refreshing={loading}
          onRefresh={() => getListPosts}
        />
      </S.Main>

    </S.SafeAreaView >
  );
}