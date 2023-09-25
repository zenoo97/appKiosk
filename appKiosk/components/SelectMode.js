import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const SelectMode = () => {
  const [mode, setMode] = useState(true);
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => setMode(curr => (curr === true ? true : false))}
        style={[
          styles.member,
          {backgroundColor: mode === true ? 'black' : 'grey'},
        ]}>
        <Text style={styles.memberText}>회원입장</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.member,
          {backgroundColor: mode === false ? 'black' : 'grey'},
        ]}
        onPress={() => setMode(curr => (curr === false ? false : true))}>
        <Text style={styles.guestText}>일일입장</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  member: {
    padding: 10,
    backgroundColor: '#000000',
    color: '#FFFFFF',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  guest: {
    padding: 10,
    backgroundColor: '#000000',
    color: '#FFFFFF',
    borderRadius: 10,
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  memberText: {
    color: 'white',
  },
  guestText: {
    color: 'white',
  },
});
export default SelectMode;
