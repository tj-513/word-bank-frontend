import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Bar } from 'react-native-progress';
import * as selectors from '../../../selectors';
import styles from './styles';

class ProgressBar extends Component {
  render() {
    const {
      wordCount,
      currentIndex,
    } = this.props;
    return (
      <View>
        <Bar progress={(currentIndex + 1)/wordCount} width={null} />
        <Text style={styles.progressText}>{`${currentIndex+1} out of ${wordCount}`}</Text>
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  currentIndex: state.game.currentIndex,
  wordCount: selectors.getGameWordCount(state),
});

export default connect(mapStateToProps, null)(ProgressBar);
