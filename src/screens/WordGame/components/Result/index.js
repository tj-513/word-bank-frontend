import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import * as selectors from '../../selectors';
import styles from './styles';

class Result extends Component {
  render() {
    const {
      result: { correct, total },
      onPressRetry
    } = this.props;
    return (
      <View>
        <Text style={styles.title}>Tada! Result</Text>
        <View style={styles.resultContainer} >
          <Text style={styles.result}>{`${correct}/${total}`}</Text>
        </View>
        <Button title="Let's do again!" onPress={onPressRetry} />
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  result: selectors.getResultForView(state),
});

const mapDispatchToProps = (dispatch) => ({
  onPressRetry: (option) => dispatch(actions.onPressRetry()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Result);
