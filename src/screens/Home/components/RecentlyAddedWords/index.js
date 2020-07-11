import React from 'react';
import { FlatList, View, Text, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import styles from './styles';

const RecentlyAddedWords = ({ recentlyAddedWords, isRecentlyAddedWordsLoading }) => {
  if(isRecentlyAddedWordsLoading){
    return (<View>
      <Text style={styles.title}>Loading recently added words</Text>
      <ActivityIndicator size="large" />
    </View>)
  }
  return (
    <View style={{flex:1}}>
      {recentlyAddedWords.length > 0 && (
        <Text style={styles.title}>Recently added words</Text>
      )}
      <FlatList
        data={recentlyAddedWords || []}
        keyExtractor={ (item)=>item._id}
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
  recentlyAddedWords: PropTypes.array,
};

RecentlyAddedWords.defaultProps = {
  recentlyAddedWords: [],
};

export default RecentlyAddedWords;
