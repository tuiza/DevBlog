import styled from 'styled-components'
import * as Animatable from 'react-native-animatable'
import { FlatList } from 'react-native'

const FlatListAnimated = Animatable.createAnimatableComponent(FlatList)

export const SafeAreaView = styled.SafeAreaView`
    flex: 1;
    background-color: #232630;
`

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 18px 18px 24px;
`

export const Title = styled(Animatable.Text)`
    color: #fff;
    font-weight: bold;
    font-size: 28px;
`

export const Button = styled.TouchableOpacity`
`

export const Categories = styled(FlatListAnimated)`
    max-height: 115px;
    background-color: #EFEFEF;
    margin: 0 18px;
    border-radius: 8px;
    z-index: 9;
`

export const FavoritesCategory = styled.FlatList`
    max-height: 120px;
    padding-top: 18px;
    margin: 30px 0 0 18px;
`

export const Main = styled.View`
    flex: 1;
    background-color: #fff;
    margin-top: -30px;
`

export const Text = styled.Text`
    font-size: 18px;
    font-weight: bold;
    margin-top: ${({ hasFavorites }) => hasFavorites };
    margin-left: 18px;
    margin-bottom: 10px;
`

export const Posts = styled.FlatList`
    flex: 1;
    padding: 0 18px;
`