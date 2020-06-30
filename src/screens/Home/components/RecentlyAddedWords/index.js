import React from 'react';
import { FlatList, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const RecentlyAddedWords = ({ currentDefinitions }) => {
  return (
    <View>
      {currentDefinitions.length > 0 && (
        <Text style={styles.title}>Recently added words</Text>
      )}
      <FlatList
        data={currentDefinitions || []}
        renderItem={({ item }) => (
          <View style={styles.recentlyAddedWord}>
            <Text style={styles.word}>{item.word}</Text>
            <Text style={styles.definition}>{item.definition}</Text>
            {item.sampleSentence && (
              <Text style={styles.sampleSentence}>{item.sampleSentence}</Text>
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
