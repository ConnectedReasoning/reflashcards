import {Navigation} from 'react-native-navigation';
import App from './App';
import FlashCard from './components/flashCard/flashCard';
import Initializing from './initializing';

export function registerScreens() {

  Navigation.registerComponent(`App`, () => App);
  Navigation.registerComponent(`FlashCard`, () => FlashCard);
  Navigation.registerComponent(`Initializing`, () => Initializing);
}