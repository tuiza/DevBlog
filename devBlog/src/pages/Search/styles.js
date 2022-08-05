import styled from 'styled-components'

export const Container = styled.SafeAreaView`
    padding: 18px;
    flex: 1;
    flex-direction: column;
`
export const InputConatiner = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-radius: 4px;
    padding: 10px;
    background-color: #c4c4c4;
    height: 45px;
`

export const Input = styled.TextInput`
    background-color: #F5F5F5;
    flex: 1;
    margin-right: 5px;
    background-color: #c4c4c4;
`

export const Posts = styled.FlatList`
    padding: 10px 0;
    flex:1;
`
export const NotFound = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`