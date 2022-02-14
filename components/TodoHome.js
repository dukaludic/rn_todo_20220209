import React, {useContext, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
} from 'react-native';
import {GlobalState} from '../context/GlobalState';
import Navbar from './Navbar';
import NewTodo from './NewTodo';

function TodoHome({navigation}) {
  const state = useContext(GlobalState);

  console.log(state, '===state');

  return (
    <>
      <View style={styles.headerContainer}>
        <Text style={styles.headingTitle}>To Do</Text>
        <NewTodo />
        <Button
          title="Go to finished"
          onPress={() => navigation.navigate('FinishedTodos')}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#fafafa',
    flex: 1,
    alignItems: 'center',
  },
  headingTitle: {
    fontSize: 30,
    color: 'orange',
  },
  input: {
    height: 40,
    width: '80%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default TodoHome;
