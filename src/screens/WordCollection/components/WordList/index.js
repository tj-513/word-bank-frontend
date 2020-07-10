import React from 'react';
import { View, FlatList } from 'react-native';
import WordCard from '../WordCard';

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

const WordList = ({ words, onDeleteWord }) => (
  <View style={{ flex: 1, paddingTop: 10 }}>
    <FlatList
      data={words}
      renderItem={({ item }) => renderWordCard(item, onDeleteWord)}
      keyExtractor={(word) => word._id}
    />
  </View>
);

export default WordList;
