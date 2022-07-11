import React from 'react';
import * as S from './styles'
import { View } from 'react-native'
import { WebView } from 'react-native-webview'
import { Feather } from '@expo/vector-icons'

export default function LinkWeb({ link, title, closeModal }) {
    return (
        <>
            <S.Container animationType='slide' onPress={closeModal}>
                <Feather name='x' size={25} color='#fff' />
                <S.Text>{title}</S.Text>
            </S.Container>
            <WebView
                source={{ uri: link}}
            />
        </>
    );
}