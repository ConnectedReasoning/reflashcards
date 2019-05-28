import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

import { goHome } from './navigation'

export default class Initializing extends Component {
  constructor(props){
    super(props)

  }
  
  async componentDidMount() {    
    try {
      console.log('in initializing ')
      goHome()
    } catch (err) {
      console.log('in initializing.componentDidMount error: ', err)

    }
  }
  

  render() {
    return (
      <View style={{marginTop:100, backgroundColor:'orange'}}>
        <Text>{`Initializing`}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'lightblue'
  }
})
