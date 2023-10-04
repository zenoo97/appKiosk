import React, {useState, useEffect} from 'react';
import {StyleSheet, Text} from 'react-native';
import indexStore from '../stores/IndexStore';
import {Observer} from 'mobx-react';

const Countdown = ({seatData}) => {
  const {seatStore} = indexStore();
  const [remainingMinutes, setRemainingMinutes] = useState(
    Math.floor(seatData.useTime / 60),
  );
  const [remainingSeconds, setRemainingSeconds] = useState(
    seatData.useTime % 60,
  );

  useEffect(() => {
    if (seatData.useTime > 0) {
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
  }, [remainingMinutes, remainingSeconds, seatData, seatStore]);

  // useTime이 변경될 때마다 남은 시간을 업데이트
  useEffect(() => {
    setRemainingMinutes(Math.floor(seatData.useTime / 60));
    setRemainingSeconds(seatData.useTime % 60);
  }, [seatData.useTime]);

  return (
    <Observer>
      {() => (
        <Text style={styles.remainingTimeText}>
          {seatData.useTime > 0
            ? `${remainingMinutes}분 ${remainingSeconds}초`
            : ''}
        </Text>
      )}
    </Observer>
  );
};

const styles = StyleSheet.create({
  remainingTimeText: {
    fontSize: 20,
  },
});

export default Countdown;
