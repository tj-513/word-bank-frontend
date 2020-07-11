import React from 'react';
import { View, Text, SectionList } from 'react-native';
import WordCard from '../WordCard';
import styles from './styles';

const renderWordCard = (item, onDeleteWord) => {
  return (
    <WordCard
      _id={item._id}
      word={item.word}
      definition={item.definition}
      sampleSentence={item.sampleSentence}
      onDeleteWord={onDeleteWord}
    />
  );
};

const renderSectionHeader = ({ section: { title } }) => (
  <View style={styles.sectionHeader}>
    <Text style={styles.sectionHeaderText}>{title}</Text>
  </View>
)

const WordList = ({ groupedWords, onDeleteWord }) => (
  <View style={{ flex: 1, paddingTop: 10 }}>
    <SectionList
      sections={groupedWords}
      renderItem={({ item }) => renderWordCard(item, onDeleteWord)}
      keyExtractor={(word) => word._id}
      renderSectionHeader={renderSectionHeader}
    />
  </View>
);

export default WordList;
