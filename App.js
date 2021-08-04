import React from 'react';
import { StyleSheet, Text, FlatList, View, Alert, TouchableWithoutFeedback, Keyboard} from 'react-native'
import { useState } from 'react'
import Header from './components/header'
import ToDoItem from './components/todoItem'
import AddToDo from './components/addtodo'
import {MaterialIcons} from '@expo/vector-icons'
export default function App() {

  const [todos, setTodos] = useState([

    {text:'buy coffee for me', key:'1'},
    {text:'create an app for me', key:'2'},
    {text:'play on the beach', key:'3'},
    {text:'surfing on island', key:'4'}
  ])

  const pressHandler = (id) => {
      setTodos(prevTodos => prevTodos.filter(todo => todo.key != id))
  }

  const addToDo = (todo) => {

      if(todo.length > 3){
        setTodos(prevpeople => [{text: todo, key:Math.random().toString()}, ...prevpeople])
      }else{
        Alert.alert('Warning', 'Todo Must be over 3 character long', [{text:'Understood', onPress: () => console.log('alert changed')}])  
      }
  }

  
  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss()
      console.log('keyboard dismissed')
    }}>
    <View style={styles.container}>  
      <Header/>
      <View style={styles.content}>
      {/*to do form*/}
      <AddToDo addToDo={addToDo}/>
      <View style={styles.list}>
        <FlatList 
          data={todos}
          renderItem={({item}) => <ToDoItem item={item} pressHandler={pressHandler}/>}               
        />
      </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {  
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    padding:40,
    flex:1
  }, 
  list:{
    flex:1,
    marginTop:20,
    

  }
});
