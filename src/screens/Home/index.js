import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import styles from './styles';
import WordInputForm from './components/WordInputForm';
import RecentlyAddedWords from './components/RecentlyAddedWords';
import HomeHeader from './components/HomeHeader';
import * as actions from './actions/actions';
import { connect } from 'react-redux';

export function Home({
  currentDefinitions,
  isDefinitionInputFormLoading,
  onSubmitDefinition,
}) {
  const handleOnSubmitWord = (values) => {
    const { word, definition, sampleSentence } = values;
    onSubmitDefinition(word, definition, sampleSentence);
  };

  return (
    <View style={styles.homeContainer}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <HomeHeader />

          <WordInputForm
            onSubmitWord={handleOnSubmitWord}
            isDefinitionInputFormLoading={isDefinitionInputFormLoading}
          />
        </View>
      </TouchableWithoutFeedback>
      <RecentlyAddedWords currentDefinitions={currentDefinitions} />
    </View>
  );
}

Home.propTypes = {
  currentDefinitions: PropTypes.array,
};

Home.defaultProps = {
  currentDefinitions: [],
};

const mapStateToProps = (state) => ({
  currentDefinitions: state.home.currentDefinitions,
  isDefinitionInputFormLoading: state.home.isDefinitionInputFormLoading,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmitDefinition: (word, definition, sampleSentence) =>
    dispatch(actions.onSubmitDefinition(word, definition, sampleSentence)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
