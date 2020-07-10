import React from 'react';
import { View, Text, ActivityIndicator, SafeAreaView } from 'react-native';
import {connect} from 'react-redux';
import * as actions from './actions/actions';
import WordList from './components/WordList';
import styles from './styles';

class WordCollection extends React.Component {
  componentDidMount() {
    this.props.fetchWords({sortBy:'dateCreated', sortOrder:'desc', page:1, pageSize: 50});
  }

  render() {
    const {words, isWordsLoading, isWordsLoadingError} = this.props

    if(isWordsLoading){
      return (<View>
        <Text style={{ alignSelf: 'center' }}>Loading words..</Text>
        <ActivityIndicator size="large" />
      </View>);
    }

    if(isWordsLoadingError){
      return (<View>
        <Text style={{ alignSelf: 'center' }}>An error occurred while loading words</Text>
      </View>);
    }

    return (
      <SafeAreaView style={styles.container}>
        <Text style={{ alignSelf: 'center' }}>My words collection</Text>
        <WordList words={words} />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  words: state.wordCollection.words,
  isWordsLoading: state.wordCollection.isWordsLoading,
  isWordsLoadingError: state.wordCollection.isWordsLoadingError,
});

const mapDispatchToProps = (dispatch) => ({
  fetchWords: ({ sortBy, sortOrder, page, pageSize }) =>
    dispatch(actions.fetchWords({ sortBy, sortOrder, page, pageSize })),
});
export default connect(mapStateToProps, mapDispatchToProps)(WordCollection);
