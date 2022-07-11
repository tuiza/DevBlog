import React from 'react'
import * as S from './style'
import { useNavigation } from '@react-navigation/native';

export default function PostItem({ data }) {
    const navigation = useNavigation()
    function handleDetails() {
        navigation.navigate('Detail', {id: data?.id})
    }
    return (
        <S.Container onPress={() => handleDetails()}>
            <S.Image source={{ uri: `http://192.168.100.188:1337${data?.attributes?.cover?.data?.attributes?.url}` }} />
            <S.TextContainer>
                <S.Title>{data.attributes.title}</S.Title>
                <S.Description numberOfLines={2}>{data.attributes.description}
                </S.Description>
            </S.TextContainer>


        </S.Container>
    );
}