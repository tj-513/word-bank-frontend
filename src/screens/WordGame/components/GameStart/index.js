import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';

class GameStart extends Component {
  render() {
    return (
      <View>
        <Text style={styles.title}>Game is about to start</Text>
        <Text style={styles.message}>

            You will get 10 words from your added words.{'\n'}
            Select correct definition for the given word{'\n'}
            {'\n'}
            Press start when you are ready.{'\n'}

        </Text>
        <Button title="Start"></Button>
      </View>
    );
  }
}

export default GameStart;
