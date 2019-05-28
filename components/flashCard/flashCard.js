import React, {Component} from 'react';
import { Navigation } from 'react-native-navigation';
import { Alert,StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import CardFlip from 'react-native-card-flip';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import terms  from './terms2';
import styles from './styles';

export default class FlashCard extends Component{
  constructor(props){
    super(props);
    if(props.currentTerm){ 
      currentTerm = props.currentTerm;
    } else {
      currentTerm = Math.floor(Math.random() * terms.length);
    }
    //console.log('in FlashCard.constructor props is ', this.props);
    //console.log('in FlashCard.constructor currentTerm is ', currentTerm);
    this.state={
      currentTerm:currentTerm,
      currentFace:'back'
    }
    this.setonSwipeNewCard = this.onSwipe.bind(this);
  }
  onSwipe(gestureName, gestureState) {
    //console.log('in onSwipe gestureName is ',gestureName);
    //console.log('in onSwipe gestureState is ',gestureState);
    console.log('in Swipe left componentId is ', this.props.componentId);
    if(gestureName === 'SWIPE_RIGHT' && this.props.componentId !== 'FlashCardId'){
      Navigation.pop(this.props.componentId);
    } else if(gestureName==='SWIPE_LEFT') {
      const currentTerm = Math.floor(Math.random() * terms.length);
      console.log('in Swipe left componentId is ', this.props.componentId);
      Navigation.push(this.props.componentId, {
        component: {
          name: 'FlashCard',
          passProps:{
            currentTerm: currentTerm,
          }
        }
      });
    }
  }
  render() {
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };
    //console.log('in flashCard.render terms is ', terms);
    //console.log('in flashCard.render this.state is ', this.state);
    return (
      
      <View style={styles.container}>
        <CardFlip style={styles.cardContainer  } ref={(card) => this.card = card} >
            <TouchableOpacity style={[styles.card, styles.cardFront, {borderWidth:5, borderColor:'#cccccc'}]} onPress={() => {this.setState({currentFace:'back'}); this.card.flip()}} >
              <Text style={styles.label}>{terms[this.state.currentTerm].term}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.card, styles.cardBack, {borderWidth:5, borderColor:'#cccccc'}]} onPress={() => {this.setState({currentFace:'front'}); this.card.flip()}} >
              <Text style={styles.label}>{terms[this.state.currentTerm].definition}</Text>
            </TouchableOpacity>
        </CardFlip>
        <GestureRecognizer
          onSwipe={(direction, state) => this.onSwipe(direction, state)}
          config={config}
          style={styles.buttonContainer}
        >
          <View style={styles.swipeMe}>
            <Text>Swipe Me</Text>
          </View>
        </GestureRecognizer>
      </View>
    );
  }
}
