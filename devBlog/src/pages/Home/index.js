import React from 'react';
import * as S from './styles.js'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'

export default function Home() {
  const navigation = useNavigation()
  return (
    <S.SafeAreaView>
      <S.Header>
        <S.Title>DevBlog</S.Title>
        <S.Button>
          <Feather name='search' size={24} color='#fff'/>
        </S.Button>
      </S.Header>
    </S.SafeAreaView>
  );
}