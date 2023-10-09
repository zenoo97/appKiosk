import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

const StatusBar = () => {
  const status = [
    {
      name: '이용중',
      backgroundColor: '#FA6400',
    },
    {
      name: '이용가능',
      backgroundColor: '#3187FD',
    },
    {
      name: '이용불가능',
      backgroundColor: '#525252',
    },
  ];
  const StatusBarIcon = ({index, statusName, backgroundColor}) => {
    return (
      <View style={styles.statusBar}>
        <View style={[styles.statusIcon, {backgroundColor}]}></View>
        <Text style={styles.statusText}>{statusName}</Text>
      </View>
    );
  };
  return (
    <View style={styles.statusBar}>
      {status.map(item => (
        <StatusBarIcon
          statusName={item.name}
          backgroundColor={item.backgroundColor}
        />
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  statusBar: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  statusIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  statusText: {
    fontSize: 20,
    paddingHorizontal: 5,
  },
});
export default StatusBar;
