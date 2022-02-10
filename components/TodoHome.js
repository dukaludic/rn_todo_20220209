import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

function TodoHome() {
  return (
    <>
      <View style={styles.headerContainer}>
        <Text>Tasks To Do</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'red',
    flex: 1,
  },
});

console.log(styles, '===styles');

export default TodoHome;
