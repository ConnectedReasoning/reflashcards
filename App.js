import React, {Component} from 'react';
import { Navigation } from 'react-native-navigation';
import { View, Text } from 'react-native';
import {FlashCard } from './components/flashCard/flashCard'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
    }
    //Navigation.events().bindComponent(this);
  }
  render() {
    console.log('in app.render FlashCard is ', FlashCard);
    return (
      <App style={{marginTop:100, backgroundColor:'brown'}}>
        <Text>{``}</Text>
      </App>
    );
  }
}
