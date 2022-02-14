import React, {useContext} from 'react';
import {Text, Button} from 'react-native';
import Navbar from './Navbar';
import {GlobalState} from '../context/GlobalState';

function FinishedTodos() {
  const context = useContext(GlobalState);
  const logContext = () => {
    console.log(context);
  };

  return (
    <>
      <Text>FinishedTodos</Text>
      <Button
        onPress={logContext}
        title="Show Context"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </>
  );
}

export default FinishedTodos;
