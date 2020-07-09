import React from 'react';
import { FlatList, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import styles from './styles';

const RecentlyAddedWords = ({ currentDefinitions }) => {
  return (
    <View style={{flex:1}}>
      {currentDefinitions.length > 0 && (
        <Text style={styles.title}>Recently added words</Text>
      )}
      <FlatList
        data={currentDefinitions || []}
        renderItem={({ item }) => (
          <View style={styles.recentlyAddedWord}>
            <Text style={styles.word}>{item.word}</Text>
            <Text style={styles.definition}>{item.definition}</Text>
            { !isEmpty(item.sampleSentence) && (
              <Text style={styles.sampleSentence}>
                {`Eg:- ${item.sampleSentence}`}
              </Text>
            )}
          </View>
        )}
      ></FlatList>
    </View>
  );
};

RecentlyAddedWords.propTypes = {
  currentDefinitions: PropTypes.array,
};

RecentlyAddedWords.defaultProps = {
  currentDefinitions: [],
};

export default RecentlyAddedWords;
