import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import * as selectors from '../../selectors';
import styles from './styles';

class Question extends Component {
  render() {
    const {
      currentWord: { word, options },
      onPressOption,
    } = this.props;
    return (
      <View>
        <Text style={styles.title}>{word}</Text>
        <View style={styles.optionsContainer}>
          {options.map((option, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => onPressOption(option)}
              style={styles.option}
            >
              <Text style={styles.buttonTitleStyle}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  currentWord: selectors.getWordsForQuestionIndex(state),
});

const mapDispatchToProps = (dispatch) => ({
  onPressOption: (option) => dispatch(actions.onPressOption(option)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);
