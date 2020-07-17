import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import * as actions from './actions/actions';
import GameLoader from './components/GameLoader';
import GameStart from './components/GameStart';
import styles from './styles';

class WordGame extends Component {
  componentDidMount() {
    const { loadWordsForGame } = this.props;
    loadWordsForGame();
  }

  render() {
    const {
      isInitialDataLoading,
      isInitialDataLoadingError,
      currentStage,
    } = this.props;

    if (isInitialDataLoading) {
      return (
        <View style={styles.container}>
          <GameLoader loaderMessage='Loading game... Please wait' />
        </View>
      );
    }

    if (isInitialDataLoadingError) {
      return (
        <View style={styles.container}>
          <GameLoader loaderMessage='Oops.. An error occurred' isError />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        {currentStage === 'START' && <GameStart />}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  isInitialDataLoading: state.game.isInitialDataLoading,
  isInitialDataLoadingError: state.game.isInitialDataLoadingError,
  currentStage: state.game.currentStage,
});

const mapDispatchToProps = (dispatch) => ({
  loadWordsForGame: () => dispatch(actions.fetchInitialWordsForGame()),
});

export default connect(mapStateToProps, mapDispatchToProps)(WordGame);
