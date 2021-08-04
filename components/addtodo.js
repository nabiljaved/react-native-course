import React,  {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function AddToDo({addToDo}) {

    
const [text, setText] = useState('')

const textHandler = (val) => {
    setText(val)

}

    return (
        <View >
            <TextInput
                style={styles.input}
                placeholder='e.g todo'
                onChangeText={textHandler}
            >

            </TextInput>

            <Button onPress={() => {addToDo(text)}} title='add todo' color='coral'/>

        </View>
        
    )   
}

const styles = StyleSheet.create({

    input : {
        marginBottom: 10, 
        paddingHorizontal: 8, 
        paddingVertical:6,
        borderBottomWidth:1, 
        borderBottomColor: '#ddd'
    }


})