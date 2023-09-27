import React, {useState, useEffect} from 'react';
import {StyleSheet, Text} from 'react-native';
import indexStore from '../stores/IndexStore';
import {Observer} from 'mobx-react';

const Countdown = ({useTime, seatData}) => {
  const {seatStore} = indexStore();
  const [remainingMinutes, setRemainingMinutes] = useState(
    Math.floor(useTime / 60),
  );
  const [remainingSeconds, setRemainingSeconds] = useState(useTime % 60);

  useEffect(() => {
    if (useTime > 0) {
      const timer = setInterval(() => {
        seatStore.timeMinus(seatData, seatData.station_num);
        if (remainingSeconds > 0) {
          setRemainingSeconds(remainingSeconds - 1);
        } else if (remainingMinutes > 0) {
          setRemainingMinutes(remainingMinutes - 1);
          setRemainingSeconds(59);
        }
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [useTime, remainingMinutes, remainingSeconds, seatData, seatStore]);

  return (
    <Text style={styles.remainingTimeText}>
      {useTime > 0 ? `${remainingMinutes}분 ${remainingSeconds}초` : ''}
    </Text>
  );
};

const styles = StyleSheet.create({
  remainingTimeText: {
    fontSize: 20,
  },
});
export default Countdown;
