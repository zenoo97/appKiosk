import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {inject, observer} from 'mobx-react';

const subscribeStore = [
  {
    id: '30분',
  },
  {
    id: '60분',
  },
  {
    id: '120분',
  },
];
const Subscribe = () => {
  return (
    <View style={styles.container}>
      {subscribeStore.map(item => (
        <View style={styles.subscribe}>
          <Text style={styles.subscribeText}>{item.id}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  subscribe: {
    backgroundColor: '#f0f0f0',
    width: 130,
    height: 130,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  subscribeText: {
    color: 'black',
  },
});
export default Subscribe;
