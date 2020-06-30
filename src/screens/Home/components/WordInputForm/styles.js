import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wordInput: {
    flexDirection: 'row',
    maxWidth: '100%',
    marginBottom: 4,
    marginTop: 4,
  },
  wordTextInput: {
    padding: 4,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'gray',
    marginRight: 2,
    flex: 5,
  },
  lookupButton: {
    alignSelf: 'center',
  },
  lookupButtonContainer: {
    flex: 3,
    alignSelf: 'flex-end',
    textAlign: 'center',
  },
  definitionTextInput: {
    padding: 4,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 4
  },
});

export default styles;
