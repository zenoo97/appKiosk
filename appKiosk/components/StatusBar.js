import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import {height, scale, width} from '../config/globalStyles';

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
      <View style={styles.container}>
        <View style={[styles.statusIcon, {backgroundColor}]}></View>
        <View style={{paddingRight: 19.94}}></View>
        <Text style={styles.statusText}>{statusName}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
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
  container: {
    flexDirection: 'row',
    paddingLeft: 35.32 * width,
    paddingTop: 46 * height,
    // paddingBottom: 10,
    // backgroundColor: '#EEE',
    alignItems: 'center',
  },
  statusIcon: {
    width: 33.234 * width,
    height: 33.234 * width,
    borderRadius: 3.323 * scale,
  },
  statusText: {
    fontSize: 29.91 * scale,
    fontWeight: '700',
    color: '#000',
  },
});
export default StatusBar;
