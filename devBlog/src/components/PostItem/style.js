import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    border: 1px solid #EFEFEF;
    border-radius: 4px;
    margin-bottom: 14px;
    align-items: center;
    justify-content: space-between;
`;

export const Image = styled.Image`
    width: 90px;
    height: 90px;
`;

export const TextContainer = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 90%;
`;

export const Title = styled.Text`
    font-weight: bold;
    padding: 0 0 10px 8px;
    font-size: 14px;
    `

export const Description = styled.Text`
  margin: 0 8px;
  font-size: 12px;
  line-height: 16px;
  width: 80%;
  
  
`;