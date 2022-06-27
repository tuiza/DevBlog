import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const {width} = Dimensions.get('window')

export const Container = styled.TouchableOpacity`
    flex: 1;
    margin-right: 8px;
`;

export const Background = styled.ImageBackground`
    width:  ${width - 90}px;
    height: 100px;
    justify-content: flex-end;
    background-color: #232630;
    border-radius: 4px;
`;

export const Title = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 18px;
    padding: 10px 8px;
    text-shadow:  #121212 2px 1px 8px;
`;
