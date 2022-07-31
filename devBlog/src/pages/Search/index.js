import React, { useState } from 'react';
import * as S from './styles.js'
import { Feather } from '@expo/vector-icons'
import { TouchableOpacity, Text, Keyboard } from 'react-native'
import api from '../../services/api.js'
import PostItem from '../../components/PostItem'

export default function Search() {
  const [input, setInput] = useState('')
  const [posts, setPosts] = useState([])
  const [isEmpty, setIsEmpty] = useState(false)

  async function handleSearch() {
    if (input === '') {
      alert('Digite algum nome :)')
      return
    }
    const response = await api.get(`api/posts?filters[title][$containsi]=${input}&populate=cover`)

    if (response.data?.data.length == 0) {
      setIsEmpty(true)
      setPosts([])
      setInput('')
      return
    }
    setPosts(response.data?.data)
    setIsEmpty(false)
  
    setInput('')
    Keyboard.dismiss()
  }
  return (
    <S.Container>
      <S.InputConatiner>
        <S.Input
          type='search'
          maxLength={40}
          placeholder='O que está buscando?'
          value={input}
          blurOnSubmit
          onChangeText={(text) => setInput(text)}
          onSubmitEditing={() => handleSearch()}
        />
        <TouchableOpacity onPress={handleSearch}>
          <Feather name='search' size={24} color='#000' />
        </TouchableOpacity>
      </S.InputConatiner>

      {isEmpty && 
        <S.NotFound>
          <Text>Ops, não encontramos nenhum post :( </Text>
      </S.NotFound>
      }

      <S.Posts
        showsVerticalScrollIndicator={false}
        data={posts}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <PostItem data={item} />}
      />

    </S.Container>
  )
}