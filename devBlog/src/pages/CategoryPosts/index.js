import React, { useEffect, useLayoutEffect, useState } from 'react';
import * as S from './styles.js'
import { useNavigation, useRoute } from '@react-navigation/native';
import api from '../../services/api.js';
import { FlatList } from 'react-native';
import PostItem from '../../components/PostItem/index.js';

export default function CategoryPosts() {
  const [posts, setPosts] = useState([]);
  const navigation = useNavigation()
  const route = useRoute()

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.title || 'Categoria'
    })
  }, [navigation])

  useEffect(() => {
    async function getPosts() {
      const response = await api.get(`api/categories/${route.params?.id}?fields=name&populate=posts,posts.cover`)
      setPosts(response.data?.data?.attributes?.posts?.data)
    }
    getPosts()
  }, [])

  return (
    <S.Container>
      {posts.length === 0 && (
        <S.Text>Essa categoria ainda não possui nenhum post</S.Text>
      ) }
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <PostItem data={item} />}
        data={posts}
      />
    </S.Container>
  );
}