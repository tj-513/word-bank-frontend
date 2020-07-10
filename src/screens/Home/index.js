import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from './styles';
import WordInputForm from './components/WordInputForm';
import RecentlyAddedWords from './components/RecentlyAddedWords';
import HomeHeader from './components/HomeHeader';
import * as actions from './actions/actions';
import { connect } from 'react-redux';
import { render } from 'react-dom';

class Home extends React.Component {

  componentDidMount(){
    this.props.fetchRecentlyAddedWords();
  }

  handleOnSubmitWord = (values) => {
    const { word, definition, sampleSentence } = values;
    this.props.onSubmitDefinition(word, definition, sampleSentence);
  };

  render() {
    const { recentlyAddedWords, isDefinitionInputFormLoading, isRecentlyAddedWordsLoading } = this.props;

    return (
      <View style={styles.homeContainer}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <HomeHeader />

            <WordInputForm
              onSubmitWord={this.handleOnSubmitWord}
              isDefinitionInputFormLoading={isDefinitionInputFormLoading}
            />
          </View>
        </TouchableWithoutFeedback>
        <RecentlyAddedWords isRecentlyAddedWordsLoading={isRecentlyAddedWordsLoading}  recentlyAddedWords={recentlyAddedWords} />
      </View>
    );
  }
}

Home.propTypes = {
  recentlyAddedWords: PropTypes.array,
};

Home.defaultProps = {
  recentlyAddedWords: [],
};

const mapStateToProps = (state) => ({
  recentlyAddedWords: state.home.recentlyAddedWords,
  isDefinitionInputFormLoading: state.home.isDefinitionInputFormLoading,
  isRecentlyAddedWordsLoading: state.home.isRecentlyAddedWordsLoading
});

const mapDispatchToProps = (dispatch) => ({
  onSubmitDefinition: (word, definition, sampleSentence) =>
    dispatch(actions.onSubmitDefinition(word, definition, sampleSentence)),
  fetchRecentlyAddedWords: () => dispatch(actions.fetchRecentlyAddedWords()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
