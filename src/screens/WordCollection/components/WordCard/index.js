import React from 'react';
import { View, Text } from 'react-native';
import isEmpty from 'lodash/isEmpty';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

const WordCard = ({ word, definition, sampleSentence }) => (
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
    <View style={styles.deleteButton} >
      <Icon.Button  iconStyle={styles.deleteButtonIcon} name="ios-trash" />
    </View>
  </View>
);

export default WordCard;
