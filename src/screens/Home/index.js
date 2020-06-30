import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
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
    const { word, definition } = values;
    onSubmitDefinition(word, definition);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.homeContainer}>
        <HomeHeader />

        <WordInputForm
          onSubmitWord={handleOnSubmitWord}
          isDefinitionInputFormLoading={isDefinitionInputFormLoading}
        />
        <RecentlyAddedWords currentDefinitions={currentDefinitions} />
      </View>
    </TouchableWithoutFeedback>
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
  onSubmitDefinition: (word, definition) =>
    dispatch(actions.onSubmitDefinition(word, definition)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
