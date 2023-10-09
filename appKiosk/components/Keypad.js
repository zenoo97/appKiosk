import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const Keypad = () => {
  const userNameHandler = text => {
    setUserName(text);
  };
  const number = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
    {
      id: 8,
    },
    {
      id: 9,
    },
    {
      id: 0,
    },
  ];
  return (
    <View style={styles.container}>
      <TextInput style={styles.userInput} onChangeText={userNameHandler} />
      <View style={styles.keypad}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: 400,
    height: 600,
  },
  userInput: {
    backgroundColor: '#eeeeee',
    width: 200,
    padding: 15,
  },
});
export default Keypad;
