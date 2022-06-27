import React, { useEffect, useState, FlatList } from 'react';
import * as S from './styles.js'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import api from '../../services/api'
import CategoryItem from '../../components/CategoryItem/index.js';
import { getFavorite, setFavorite } from '../../services/favorite.js';

import FavoritePost from '../FavoritePost/index.js';

export default function Home() {
  const navigation = useNavigation()

  const [categories, setCategories] = useState([]);
  const [favCategory, setFavCategory] = useState([]);
  const [hasFavorites, setHasFavorites] = useState();

  async function loadData() {
    const category = await api.get("/api/categories?populate=icon")
    setCategories(category.data.data)
  }

  async function handleFavorite(categoryId) {
    await setFavorite(categoryId)
    // alert("Categoria favoritada")
  }

  async function loadFavorite() {
    const response = await getFavorite()
    setFavCategory(response)
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
        <S.Title>DevBlog</S.Title>
        <S.Button onPress={() => navigation.navigate('Search')}>
          <Feather name='search' size={24} color='#fff' />
        </S.Button>
      </S.Header>
      <S.Categories
        horizontal={true}
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
      </S.Main>

    </S.SafeAreaView >
  );
}