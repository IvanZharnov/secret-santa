import React from 'react';
import { Font } from 'expo';
import {
  Text,
  View,
  ImageBackground,
  Picker,
  TouchableOpacity,
  Image
} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import Emoji from 'react-native-emoji';
import {
  Background,
  Wrapper,
  DropdownWrapper,
  Title,
  ChooseButton,
  ButtonText,
  RecipientText,
  TextWrapper
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
     selectedGiver: '',
     selectedRecipient: '',
   };

   selectRecipient = () => {
     const { givers, recipients, selectedGiver } = this.state;
     const newGivers = givers.filter(item => item.id !== selectedGiver.id);
     let randomIndex = Math.floor(Math.random() * recipients.length);
     if ( newGivers.length < 2 ) {
       while (
         recipients[randomIndex].id === selectedGiver.id &&
         recipients[randomIndex].id === newGivers[0].id
       ) {
         randomIndex = Math.floor(Math.random() * recipients.length);
      }
     } else {
        while (recipients[randomIndex].id === selectedGiver.id) {
          randomIndex = Math.floor(Math.random() * recipients.length);
       }
     }
     const selectedRecipient = recipients[randomIndex].value;
     const newRecipients = recipients.filter(item => item.id !== recipients[randomIndex].id);
     this.setState({
       selectedRecipient,
       recipients: newRecipients,
       givers: newGivers
     });
   }

   SelectGiver = (e, index, data) => {
     this.setState({ selectedGiver: data[index] });
   }

   onSubmit = () => {
     this.setState({
       selectedGiver: '',
       selectedRecipient: ''
     });
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
                baseColor = '#fff'
                dropdownOffset = {{ top: 20, left: 0 }}
                rippleInsets = {{ top: 0, bottom: -20 }}
                itemColor = '#880000'
                selectedItemColor = '#d70000'
                textColor = '#fff'
                pickerStyle = {{borderRadius: 20, backgroundColor: '#fff'}}
                itemCount = {6}
                fontSize = {16}
                onChangeText = {this.SelectGiver}
                disabled = {!!this.state.selectedRecipient}
              />
            </DropdownWrapper>
            {!!this.state.selectedRecipient ?
              <TextWrapper>
                <Image
                  source={require('./ball.png')}
                  style={{
                    width: 300, height: 300, position: 'absolute'
                  }} />
                <RecipientText>
                  {`    ${this.state.selectedRecipient} `}
                  <Emoji name="tada" style={{fontSize: 25}} />
                </RecipientText>
              </TextWrapper> :
              <TextWrapper />
            }
          </Wrapper>
          <ChooseButton
            onPress={!!this.state.selectedRecipient ? this.onSubmit : this.selectRecipient}
            disabled={!this.state.selectedGiver.value}
          >
            <ButtonText>
            {!!this.state.selectedRecipient ? `OK!` : `Choose!`}
            </ButtonText>
          </ChooseButton>
        </Background>
      </View>
    );
  }
}
