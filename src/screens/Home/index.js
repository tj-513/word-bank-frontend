import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import styles from './styles';
import WordInputForm from './components/WordInputForm';
import actions from './actions/actions';
import { connect } from 'react-redux';

export function Home({ currentDefinitions, setCurrentDefinitions }) {
  const handleOnSubmitWord = (values) => {
    const { word, definition } = values;
    setCurrentDefinitions([{ word, definition }, ...currentDefinitions]);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.homeContainer}>
        <Text style={{ textAlign: 'center', fontSize: 14, fontWeight: '600' }}>
          Word Bank
        </Text>
        <View>
          <Text style={{ textAlign: 'center' }}>Your repo for words</Text>
          <Image
            source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png' }}
            style={{ width: 100, height: 100, alignSelf: 'center' }}
          />
        </View>

        <WordInputForm onSubmitWord={handleOnSubmitWord} />
        <Text>Added Words</Text>
        <FlatList
          data={currentDefinitions || []}
          renderItem={({ item }) => (
            <View>
              <Text
                style={{
                  fontSize: 18,
                }}
              >
                {item.word}
              </Text>
              <Text 
                style={{
                  fontSize: 12,
                  paddingLeft:10
                }}
              >
                {item.definition}
              </Text>
            </View>
          )}
        ></FlatList>
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
});

const mapDispatchToProps = (dispatch) => ({
  onSubmitDefinition: (word, definition) =>
    dispatch(actions.onSubmitDefinition(word, definition)),
  setCurrentDefinitions: (definitions) =>
    dispatch(actions.setCurrentDefinitions(definitions)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
