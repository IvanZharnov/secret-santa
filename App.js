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
     givers: [
       { id: 0, value: 'Полина' },
       { id: 1, value: 'Ваня' },
       { id: 2, value: 'Димас' },
       { id: 3, value: 'Некит' },
       { id: 4, value: 'Галя' },
       { id: 5, value: 'Денис' }
     ],
     recipients: [
       { id: 0, value: 'Полина' },
       { id: 1, value: 'Ваня' },
       { id: 2, value: 'Димас' },
       { id: 3, value: 'Некит' },
       { id: 4, value: 'Галя' },
       { id: 5, value: 'Денис' }
     ],
     selectedGiver: {},
     selectedRecipient: ''
   };

   selectRecipient = (selectedGiver) => {
     const { givers, recipients }
     // selectedGiver = {id: NUMBER, value: STRING};
     let RandomRecipientIndex;
     const newGivers = givers.filter(item => item.id !== selectedGiver.id);
     const newRecipients = recipients.filter(item => item.id !== selectedGiver.id);
     if ( newGivers.length < 3 ) {

     } else {
       RandomRecipientIndex = Math.floor(Math.random() * newRecipients.length);

     }
   }

  async componentWillMount() {
    await Font.loadAsync({
      Christmas: require('./assets/fonts/CartoonChristmas.ttf')
    });
    this.setState({ fontLoaded: true });
  };

  componentDidMount() {

  };


  render() {
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
                data = {this.state.givers}
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
