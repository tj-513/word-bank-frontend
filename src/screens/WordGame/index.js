import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import * as actions from './actions/actions';
import GameLoader from './components/GameLoader';
import styles from './styles';

class WordGame extends Component {
  componentDidMount() {
    const { loadWordsForGame } = this.props;
    loadWordsForGame();
  }

  render() {
    const { isInitialDataLoading, isInitialDataLoadingError } = this.props;

    return (
      <View style={styles.container}>
        {isInitialDataLoading && (
          <GameLoader loaderMessage='Loading game... Please wait' />
        )}

        {isInitialDataLoadingError && (
          <GameLoader loaderMessage='Oops.. An error occurred' isError />
        )}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  isInitialDataLoading: state.game.isInitialDataLoading,
  isInitialDataLoadingError: state.game.isInitialDataLoadingError,
});

const mapDispatchToProps = (dispatch) => ({
  loadWordsForGame: () => dispatch(actions.fetchInitialWordsForGame()),
});

export default connect(mapStateToProps, mapDispatchToProps)(WordGame);
