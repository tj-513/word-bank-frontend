import React from 'react';
import {Button, TextInput, View} from 'react-native';
import {Formik} from 'formik';
import styles from './styles';

export default function WordInputForm() {

    return (
        <View>
            <Formik 
                initialValues={{word:'', definition:''}}
                onSubmit={(values)=>{
                    console.log(values);
                }}
            >
                {(props) => (
                    <View>
                        <TextInput 
                            placeholder="Word here"
                            style={styles.textInput}
                            onChangeText={props.handleChange('word')}
                            value={props.values.word}
                            />
                        <TextInput 
                            multiline
                            placeholder="Definition here"
                            style={styles.textInput}
                            onChangeText={props.handleChange('definition')}
                            value={props.values.definition}
                        />

                        <Button title="Add word" onPress={props.handleSubmit} />
                    </View>
                )}

            </Formik>
        </View>
    )
}