import React from 'react';
import { Alert, Button, TextInput, View, Text, Linking } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import styles from './styles';

const wordSchema = yup.object({
  word: yup.string().required(),
  definition: yup.string().required(),
});

const handleOnPressLookupButton = async (props) => {
  const url = `https://www.dictionary.com/browse/${props.values.word}`;
  const canOpen = Linking.canOpenURL(url);
  if (canOpen) {
    try {
      await Linking.openURL(url);
    } catch (e) {
      Alert.alert('Error', e.message);
    }
  }
};

export default function WordInputForm({ onSubmitWord }) {
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
        initialValues={{ word: '', definition: '' }}
        onSubmit={handleSubmitWord}
        validationSchema={wordSchema}
      >
        {(props) => (
          <View>
            <View style={styles.wordInput}>
              <TextInput
                placeholder='Word here'
                style={{...styles.textInput, ...styles.wordInput}}
                onChangeText={props.handleChange('word')}
                value={props.values.word}
                onBlur={props.handleBlur('word')}
              />
              <Button title='Look Up' style={styles.lookupButton} onPress={()=>handleOnPressLookupButton(props)} />
            </View>
            {props.touched.word && props.errors.word && (
              <Text>{props.errors.word}</Text>
            )}

            <TextInput
              multiline
              placeholder='Definition here'
              style={styles.textInput}
              onChangeText={props.handleChange('definition')}
              value={props.values.definition}
              onBlur={props.handleBlur('definition')}
            />
            {props.touched.definition && props.errors.definition && (
              <Text>{props.errors.definition}</Text>
            )}

            <Button title='Add word' onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}
