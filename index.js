
import { Navigation } from "react-native-navigation"
import {registerScreens} from './screens';

registerScreens();
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    topBar:{
      visible:false
    },
    layout:{
      backgroundColor: 'white'
    }
  });
  Navigation.setRoot({
    root: {
      component: {
        name: `Initializing`,
        passProps:{
          comptext:`this is manny's comp test`
        },
      },
    },
  });
});
