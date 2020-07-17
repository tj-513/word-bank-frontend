import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import { connect } from 'react-redux';
import WordCard from './WordCard';
import * as actions from '../../actions/actions';
import * as selectors from '../../selectors';
import styles from './styles';
import { FlatList } from 'react-native-gesture-handler';

class Result extends Component {
  render() {
    const {
      result: { correct, total, wrong },
      onPressRetry,
    } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Tada! Result</Text>
        <View style={styles.resultContainer}>
          <Text style={styles.result}>{`${correct}/${total}`}</Text>
        </View>
        <Button title="Let's do again!" onPress={onPressRetry} />
        <Text style={styles.wrongWordsLabelText}> What went wrong </Text>
        <View style={styles.wrongWordsContainer}>
          <FlatList
            data={wrong || []}
            keyExtractor={(item) => item.word}
            renderItem={({ item }) => (
              <WordCard
                word={item.word}
                definition={item.correct}
                sampleSentence={item.sampleSentence}
              />
            )}
          ></FlatList>
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  result: selectors.getResultForView(state),
});

const mapDispatchToProps = (dispatch) => ({
  onPressRetry: () => dispatch(actions.onPressRetry()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Result);
