import { useNavigation } from '@react-navigation/native';
import React from 'react'
import * as S from './styles'


export default function FavoritePost({ data }) {
    const navigation = useNavigation()

    function handleNavigate() {
        navigation.navigate('Detail', {id: data.id})
    }
 return (
     <S.Container onPress={() => handleNavigate()}>
         <S.Background
             source={{ uri: `http://192.168.100.188:1337${data?.attributes?.cover?.data?.attributes?.url}` }}
             resizeMode="cover"
             imageStyle={{borderRadius: 10, opacity: 0.4 }}
             blurRadius={3}
         >
             <S.Title numberOfLines={1}>{data?.attributes?.title}</S.Title> 
        </S.Background>
   </S.Container>
  );
}