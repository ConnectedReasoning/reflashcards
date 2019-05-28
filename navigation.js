import { Navigation } from 'react-native-navigation'


export const goHome = () => Navigation.setRoot({
  root: {
    stack:{
      id:'App',
      cardStyle: {backgroundColor: 'pink'},
      children:[
      {
        component: {
          id:'FlashCardId',
          name: 'FlashCard',
          passProps:{
          },
        },
      }]
    }
  }
});

