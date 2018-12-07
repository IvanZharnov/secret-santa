import React from 'react';
import { Font } from 'expo';
import {
  Text,
  View,
  ImageBackground,
  Picker
} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import {
  Background,
  Wrapper,
  DropdownWrapper,
  Title
} from './App.styles';

export default class App extends React.Component {

  state = {
     fontLoaded: false,
   };

  async componentWillMount() {
    await Font.loadAsync({
      Christmas: require('./assets/fonts/CartoonChristmas.ttf')
    });
    this.setState({ fontLoaded: true });
  };

  componentDidMount() {

  };


  render() {
    const data = [{
      value: 'Полина',
    }, {
      value: 'Ваня',
    }, {
      value: 'Димас',
    }, {
      value: 'Некит',
    }, {
      value: 'Галя',
    }, {
      value: 'Денис',
    }];

    if (!this.state.fontLoaded) {
      return <Expo.AppLoading />;
    }
    return (
      <View>
        <Background source={require('./bckgrnd.jpg')}>
          <Wrapper>
            <Title>
              Secret Santa
            </Title>
            <DropdownWrapper>
              <Dropdown
                label = 'Choose Santa'
                data = {data}
                baseColor = '#d70000'
                dropdownOffset = {{ top: 20, left: 0 }}
                rippleInsets = {{ top: 0, bottom: -20 }}
                itemColor = '#880000'
                selectedItemColor = '#d70000'
                textColor = '#d70000'
                pickerStyle = {{borderRadius: 20, backgroundColor: '#d3fece'}}
                itemCount = {6}
                fontSize = {15}
              />
            </DropdownWrapper>
          </Wrapper>
        </Background>
      </View>
    );
  }
}
