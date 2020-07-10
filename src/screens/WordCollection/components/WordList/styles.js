import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wordCard: {
    borderRadius: 4,
    borderColor: '#BFBFBF',
    borderWidth: 1,
    padding:4,
    marginBottom:2
  },
  wordText: {
    fontSize: 16,
  },
  definitionText:{
    fontSize: 14,
    paddingLeft: 10,
  },
  sampleSentenceText:{
      fontSize: 12,
      paddingLeft: 10,
      fontStyle: 'italic'
  }
});

export default styles;
