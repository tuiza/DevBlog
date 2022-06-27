import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    margin: 8px;
    border-radius: 8px;
    justify-content: center;
    padding: 0 10px;
    min-width: 90px;
`;
export const Icon = styled.Image`
   width: 40px;
   height: 40px;
`;
export const Name = styled.Text`
    font-weight: bold;
    font-size: 16px;
`;
