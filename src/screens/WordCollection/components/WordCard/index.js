import React from 'react';
import { View, Text, Alert } from 'react-native';
import isEmpty from 'lodash/isEmpty';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

const WordCard = ({ _id, word, definition, sampleSentence, onDeleteWord }) => {
  const handleOnDeletePressed = () => {
    Alert.alert(
      'Delet word',
      `Are you sure want to delete "${word}"`,
      [
        {
          text: 'No',
          style: 'cancel',
        },
        { text: 'Yes', onPress: () => onDeleteWord({_id}) },
      ],
      { cancelable: false }
    );
  };

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
      <View style={styles.deleteButton}>
        <Icon.Button
          iconStyle={styles.deleteButtonIcon}
          name='ios-trash'
          onPress={handleOnDeletePressed}
        />
      </View>
    </View>
  );
};

export default WordCard;
