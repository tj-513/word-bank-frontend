import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
} from 'react-native';
import styles from './styles';
import { FlatList } from 'react-native-gesture-handler';


export default function Home() {
  const [words, setWords] = useState([]);
  const [currentWord, setCurrentWord] = useState(null);
  const wordInputRef = useRef();
  return (
    <View>
      <Text style={{ textAlign: 'center', fontSize: 14, fontWeight: '600' }}>
        Word Bank
      </Text>
      <View>
        <Text style={{ textAlign: 'center' }}>Your repo for words</Text>
        <Image
          source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png' }}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <View style={{p:8}}>
        <TextInput
          style={styles.textInputView}
          placeholder='Add a word here'
          value={currentWord || ''}
          onChangeText={(word) => setCurrentWord(word)}
          ref={wordInputRef}
        />
      </View>

      <TextInput
        style={styles.textInputView}
        placeholder='Definition'
        value={currentWord || ''}
        onChangeText={(word) => setCurrentWord(word)}
        ref={wordInputRef}
      />

      <Button
        onPress={() => {
          currentWord && setWords([...words, currentWord]);
          setCurrentWord(null);
          wordInputRef.current.clear();
        }}
        title='Add Word'
      />

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
  );
}


