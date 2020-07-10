import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wordCard: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 4,
    borderColor: '#BFBFBF',
    borderWidth: 1,
    padding: 4,
    marginBottom: 2,
    marginLeft: 5,
    marginRight: 5,
  },
  wordText: {
    fontSize: 16,
  },
  definitionText: {
    fontSize: 14,
    paddingLeft: 10,
  },
  sampleSentenceText: {
    fontSize: 12,
    paddingLeft: 10,
    fontStyle: 'italic',
  },
  deleteButton: {
    alignSelf:'flex-start',
    textAlign:'center',
    alignItems:'center',
  },
  deleteButtonIcon: {
  },
  wordInfo: {
    flexGrow:1
  },
});

export default styles;
