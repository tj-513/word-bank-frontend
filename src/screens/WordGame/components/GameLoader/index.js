import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import styles from './styles';

class GameLoader extends Component {
  render() {
    const { loaderMessage, isError } = this.props;
    return (
      <View>
        <Text style={styles.message}>{loaderMessage}</Text>
        {!isError && <ActivityIndicator style={styles.activityIndicator} size='large' />}
      </View>
    );
  }
}

export default GameLoader;
