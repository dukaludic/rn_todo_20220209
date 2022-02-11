import React, {useState, useContext} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import {GlobalState} from '../context/GlobalState';

function NewTodo() {
  const [todoInput, setTodoInput] = useState('');
  const context = useContext(GlobalState);

  console.log(context, '===newtodo x');

  const addTodo = () => {
    // context.push({id: 3, title: todoInput});
    context.dispatch({type: 'ADD_TODO'});
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        onChangeText={setTodoInput}
        value={todoInput}
      />
      <Button
        onPress={addTodo}
        title="Add Todo"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
  },
  input: {
    height: 40,
    width: '80%',
    margin: 12,
    borderWidth: 1,
    padding: 0,
    margin: 0,
  },
});

export default NewTodo;
