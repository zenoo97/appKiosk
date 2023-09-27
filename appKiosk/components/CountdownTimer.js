import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CountdownTimer = ({initialSeconds}) => {
  const [seconds, setSeconds] = useState(parseInt(initialSeconds));

  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [seconds]);

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>{seconds} 초</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerText: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});

export default CountdownTimer;
