import React, {useState} from 'react';
import {View, TextInput, Text, Button, StyleSheet} from 'react-native';
// import {ScreenContainer} from 'react-native-screens';

function SignIn({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <Text>Username</Text>
      <TextInput onChangeText={setUsername} style={styles.input} />
      <Text>Password</Text>
      <TextInput onChangeText={setPassword} style={styles.input} />
      <Button title="Sign In" onPress={() => signIn()} />
      <Button
        title="Create Account"
        onPress={() => navigation.push('CreateAccount')}
      />
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

export default SignIn;
