import {StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'transparent',
  },
  cardContainer:{
    width: 320,
    height: 470,
    backgroundColor: 'transparent',
  },
  card:{
    width: 320,
    height: 470,
    borderRadius: 5,
    shadowColor: 'gray',
    shadowOffset: {
      width: 5,
      height: 15
    },
    shadowOpacity:0.5,
  },
  cardFront:{
    backgroundColor: 'white',
  },
  cardBack:{
    backgroundColor: '#dddddd',
  },
  label: {
    marginTop:150,
    padding:20,
    lineHeight: 25,
    textAlign: 'center',
    fontSize: 20,
    fontWeight:'500',
    fontFamily: 'System',
    color: '#333333',
    backgroundColor: 'transparent',
  },
  buttonContainer:{
    height:200
  },
  swipeMe:{
    marginTop:50,
    height:300,
    width:400,
    opacity:0.0,
    backgroundColor:'transparent',
    
  }
});

export default styles;