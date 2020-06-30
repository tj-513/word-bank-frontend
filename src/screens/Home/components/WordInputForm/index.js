import React from 'react';
import { Alert, Button, TextInput, View, Text, Linking } from 'react-native';
import { Formik } from 'formik';
import Icon from 'react-native-vector-icons/Ionicons';
import * as yup from 'yup';
import styles from './styles';

const wordSchema = yup.object({
  word: yup.string().required(),
  definition: yup.string().required(),
  sampleSentence: yup.string()
});

const handleOnPressLookupButton = async (props) => {
  const url = `https://www.dictionary.com/browse/${props.values.word}`;
  const canOpen = Linking.canOpenURL(url);
  if (canOpen && props.values.word) {
    try {
      await Linking.openURL(url);
    } catch (e) {
      Alert.alert('Error', e.message);
    }
  }
};

export default function WordInputForm({
  onSubmitWord,
  isDefinitionInputFormLoading,
}) {
  const handleSubmitWord = (values, actions) => {
    const { word, definition } = values;

    if (!(word && definition)) {
      return;
    }

    onSubmitWord(values);
    actions.resetForm();
  };

  return (
    <View style={styles.wordInputFormContainer}>
      <Formik
        initialValues={{ word: '', definition: '', sampleSentence: '' }}
        onSubmit={handleSubmitWord}
        validationSchema={wordSchema}
      >
        {(props) => (
          <View>
            <View style={styles.wordInput}>
              <TextInput
                placeholder='Word here'
                style={styles.wordTextInput}
                onChangeText={props.handleChange('word')}
                value={props.values.word}
                onBlur={props.handleBlur('word')}
              />
              <View style={styles.lookupButtonContainer}>
                <Icon.Button
                  name='ios-search'
                  style={styles.lookupButton}
                  onPress={() => handleOnPressLookupButton(props)}
                >
                  Look Up
                </Icon.Button>
              </View>
            </View>
            {props.touched.word && props.errors.word && (
              <Text style={styles.errorText}>{props.errors.word}</Text>
            )}

            <TextInput
              multiline
              placeholder='Definition here'
              style={styles.definitionTextInput}
              onChangeText={props.handleChange('definition')}
              value={props.values.definition}
              onBlur={props.handleBlur('definition')}
            />
            {props.touched.definition && props.errors.definition && (
              <Text style={styles.errorText}>{props.errors.definition}</Text>
            )}

            <TextInput
              multiline
              placeholder='Sample sentence(s) (Optional)'
              style={styles.definitionTextInput}
              onChangeText={props.handleChange('sampleSentence')}
              value={props.values.sampleSentence}
              onBlur={props.handleBlur('sampleSentence')}
            />
            {props.touched.sampleSentence && props.errors.sampleSentence && (
              <Text style={styles.errorText}>{props.errors.sampleSentence}</Text>
            )}

            <Button
              title='Add word'
              disabled={isDefinitionInputFormLoading || !props.isValid}
              onPress={props.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
}
