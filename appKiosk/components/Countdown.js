import React, {useState, useEffect} from 'react';
import {StyleSheet, Text} from 'react-native';
import indexStore from '../stores/IndexStore';
import {Observer} from 'mobx-react';

const Countdown = ({useTime, seatData}) => {
  const {seatStore} = indexStore();
  const [remainingTime, setRemainingTime] = useState(useTime);

  useEffect(() => {
    if (useTime > 0) {
      const timer = setInterval(() => {
        seatStore.timeMinus(seatData, seatData.station_num);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [useTime]);

  return (
    <Text style={styles.remainingTimeText}>
      {remainingTime > 0 ? `${useTime} 초` : ''}
    </Text>
  );
};

const styles = StyleSheet.create({
  remainingTimeText: {
    fontSize: 20,
  },
});
export default Countdown;

// 9초로 넘김 (props)
