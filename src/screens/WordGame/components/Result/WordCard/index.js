import React from 'react';
import { View, Text, Alert } from 'react-native';
import isEmpty from 'lodash/isEmpty';
import styles from './styles';

const WordCard = ({ word, definition, sampleSentence }) => {
  return (
    <View style={styles.wordCard}>
      <View style={styles.wordInfo}>
        <Text style={styles.wordText}>{word}</Text>
        <Text style={styles.definitionText}>{definition}</Text>
        {!isEmpty(sampleSentence) && (
          <Text
            style={styles.sampleSentenceText}
          >{`Eg:- ${sampleSentence}`}</Text>
        )}
      </View>
    </View>
  );
};

export default WordCard;
