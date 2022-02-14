import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {Link} from 'react-router-native';

function Navbar() {
  const goTo = path => {
    console.log(path);
  };

  return (
    <View style={styles.container}>
      {/* <Link to={`/`} style={styles.link} underlayColor="#f0f4f7">
        <Text>Todos</Text>
      </Link>
      <Link to={`/finished`} style={styles.link} underlayColor="#f0f4f7">
        <Text>Finished</Text>
      </Link> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 100,
  },
  link: {
    backgroundColor: 'red',
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Navbar;
