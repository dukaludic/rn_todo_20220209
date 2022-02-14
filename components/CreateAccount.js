import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';

function CreateAccount() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View>
      <Text>Username</Text>
      <TextInput onChangeText={setUsername} style={styles.input} />
      <Text>Password</Text>
      <TextInput onChangeText={setPassword} style={styles.input} />
      <Text>Confirm Password</Text>
      <TextInput onChangeText={setConfirmPassword} style={styles.input} />

      <Button title="Save" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default CreateAccount;
