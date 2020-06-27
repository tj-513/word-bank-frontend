import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import styles from './styles';
import { FlatList } from 'react-native-gesture-handler';
import WordInputForm from './components/WordInputForm';

export default function Home() {
  const [words, setWords] = useState([]);

  const handleOnSubmitWord = (values) => {
    const { word } = values;
    setWords((currentWords) => [word, ...currentWords]);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.homeContainer}>
        <Text style={{ textAlign: 'center', fontSize: 14, fontWeight: '600' }}>
          Word Bank
        </Text>
        <View>
          <Text style={{ textAlign: 'center' }}>Your repo for words</Text>
          <Image
            source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png' }}
            style={{ width: 100, height: 100, alignSelf: 'center' }}
          />
        </View>

        <WordInputForm onSubmitWord={handleOnSubmitWord} />
        <Text>Added Words</Text>
        <FlatList
          data={words || []}
          renderItem={({ item }) => (
            <Text
              style={{
                padding: 10,
                fontSize: 18,
                height: 44,
              }}
            >
              {item}
            </Text>
          )}
        ></FlatList>
      </View>
    </TouchableWithoutFeedback>
  );
}
