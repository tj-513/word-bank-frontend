import React from 'react';
import { View, FlatList } from 'react-native';
import WordCard from '../WordCard';

const renderWordCard = ({item}) => {
  return (
  <WordCard
    word={item.word}
    definition={item.definition}
    sampleSentence={item.sampleSentence}
  />
)};

const WordList = ({ words }) => (
  <View style={{flex:1, paddingTop: 10}}>
    <FlatList
      data={words}
      renderItem={renderWordCard}
      keyExtractor={(word) => word._id}
    />
  </View>
);

export default WordList;
