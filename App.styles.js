import styled from 'styled-components/native';

export const Background = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 58;
  color: #fff;
  font-family: 'Christmas';
  margin-bottom: 30px;
`;

export const DropdownWrapper = styled.View`
  width: 50%;
`;

export const ChooseButton = styled.TouchableOpacity`
  backgroundColor: #fff;
  width: 100%;
  height: 55px;
  justify-content: center;
  align-items: center;
  opacity: 0.7;
`;

export const ButtonText = styled.Text`
  color: #d70000;
  font-size: 20;
  fontWeight: bold;
`;

export const RecipientText = styled.Text`
  color: #d70000;
  font-size: 25;
  fontWeight: bold;
  margin-top: 100px;
`;

export const TextWrapper = styled.View`
  height: 200px;
  width: 200px;
  backgroundColor: transparent;
  borderRadius: 100px;
  padding: 0 15px;
  margin-top: 60px;
  justify-content: center;
  align-items: center;
`;
