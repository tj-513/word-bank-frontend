import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wordCard: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 4,
    borderColor: '#BFBFBF',
    borderWidth: 1,
    padding: 4,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
  },
  wordText: {
    fontSize: 16,
    fontWeight: 'bold'
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
    flexShrink: 1,
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
  },
  deleteButtonIcon: {},
  wordInfo: { flexBasis: '88%', paddingRight: 10 },
});

export default styles;
