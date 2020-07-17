import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import styles from './styles';

class GameStart extends Component {
  render() {
    const { onPressStart } = this.props;
    return (
      <View>
        <Text style={styles.title}>Game is about to start</Text>
        <Text style={styles.message}>
          You will get 10 words from your added words.{'\n'}
          Select correct definition for the given word{'\n'}
          Game progress will be lost if you navigate to another screen{'\n'}
          {'\n'}
          Press start when you are ready.{'\n'}
        </Text>
        <Button title='Start' onPress={onPressStart}></Button>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onPressStart: () => dispatch(actions.onPressGameStart()),
});

export default connect(null, mapDispatchToProps)(GameStart);
