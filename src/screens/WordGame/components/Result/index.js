import React, { Component } from 'react';
import { View, Text, ActivityIndicator, Button } from 'react-native';
import { connect } from 'react-redux';
import WordCard from './WordCard';
import * as actions from '../../actions/actions';
import * as selectors from '../../selectors';
import styles from './styles';
import { FlatList } from 'react-native-gesture-handler';

class Result extends Component {
  componentDidMount() {
    const { sendResultToServer } = this.props;
    sendResultToServer();
  }

  render() {
    const {
      result: { correct, total, wrong },
      onPressRetry,
      isSendingResult,
      isSendingResultError,
    } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Tada! Result</Text>
        <View style={styles.resultContainer}>
          <Text style={styles.result}>{`${correct}/${total}`}</Text>
        </View>
        <View>
          {isSendingResult ? (
            <View>
              <Text style={styles.centeredText}>Syncing your result..</Text>
              <ActivityIndicator />
            </View>
          ) : isSendingResultError ? (
            <Text style={styles.centeredText}>Could not sync result</Text>
          ) : (
            <Text style={styles.centeredText}>Successfully synced result</Text>
          )}
        </View>
        <Button title="Let's do again!" onPress={onPressRetry} />
        {correct !== total && (
          <Text style={styles.centeredText}> What went wrong </Text>
        )}
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
  isSendingResult: state.game.isSendingResult,
  isSendingResultError: state.game.isSendingResultError,
});

const mapDispatchToProps = (dispatch) => ({
  onPressRetry: () => dispatch(actions.onPressRetry()),
  sendResultToServer: () => dispatch(actions.sendGameResultToServer()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Result);
