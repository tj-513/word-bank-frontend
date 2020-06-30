import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  recentlyAddedWord: {
    borderRadius: 4,
    borderColor: '#BFBFBF',
    borderWidth: 1,
    padding:4,
    marginBottom:2
  },
  word: {
    fontSize: 16,
  },
  definition:{
    fontSize: 12,
    paddingLeft: 10,
  },
  sampleSentence:{
      fontSize: 12,
      paddingLeft: 10,
      fontStyle: 'italic'
  },
  title:{
    textAlign: 'center',
    paddingTop:4
  }
});

export default styles;
