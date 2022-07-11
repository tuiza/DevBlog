import styled from 'styled-components'

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
`

export const Image = styled.Image`
    width: 100%;
    height: 230px;
    background-color: #fff;
`

export const Title = styled.Text`
    font-weight: bold;
    font-size: 18px;
    margin: 18px 0;
    padding: 0 10px;
`

export const DescriptionContainer = styled.ScrollView`
     padding: 0 12px;
`

export const Description = styled.Text`
    margin: 5px 12px;
    line-height: 20px;
`

export const Text = styled.Text``

export const LinksContainer = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    margin: 8px 8px;
    padding-bottom: 10px;
`

export const Link = styled.Text`
    margin-left: 6px;
    color: #1e4687;
    font-size: 16px;
`

