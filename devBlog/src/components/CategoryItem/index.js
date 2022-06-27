import React from 'react'
import * as S from './styles'
import { useNavigation } from '@react-navigation/native';

export default function CategoryItem({ item, favoriteId }) {
    const navigation = useNavigation()

    function handleNavigate() {
        navigation.navigate('Category', {
            id: item.id,
            title: item?.attributes?.name,
        })
    }

    return (
        <S.Container
            activeOpacity={0.9}
            onPress={() => handleNavigate()}
            onLongPress={favoriteId}
        >
            <S.Icon source={{ uri: `http://192.168.100.188:1337${item?.attributes?.icon?.data?.attributes?.url}` }} />
            <S.Name>{item?.attributes?.name}</S.Name>
        </S.Container>
    );
}