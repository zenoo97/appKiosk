import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, Text} from 'react-native';
import indexStore from '../../stores/IndexStore';
import {Observer} from 'mobx-react';

const Countdown = ({seatData}) => {
  const {seatStore} = indexStore();
  const [remainingTime, setRemainingTime] = useState(seatData.use_time);
  const requestRef = useRef();
  const startTimeRef = useRef();

  useEffect(() => {
    const animate = time => {
      if (!startTimeRef.current) {
        startTimeRef.current = time;
      }
      const elapsedTime = time - startTimeRef.current;

      if (elapsedTime >= 1000) {
        // seatStore.timeMinus(seatData, seatData.key);
        setRemainingTime(prevTime => prevTime - 1);
        startTimeRef.current = time;
      }

      if (remainingTime > 0) {
        requestRef.current = requestAnimationFrame(animate);
      }
    };

    if (remainingTime > 0) {
      requestRef.current = requestAnimationFrame(animate);
    } else if (remainingTime === 0) {
      seatStore.seatDataSetting(seatData);
    }

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [remainingTime, seatData, seatStore]);

  useEffect(() => {
    // use_time이 변경될 때마다 남은 시간을 업데이트
    setRemainingTime(seatData.use_time);
  }, [seatData.use_time]);

  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  return (
    <Observer>
      {() => (
        <Text style={styles.remainingTimeText}>
          {remainingTime > 0 ? `${minutes}분 ${seconds}초` : ''}
        </Text>
      )}
    </Observer>
  );
};

const styles = StyleSheet.create({
  remainingTimeText: {
    fontSize: 20,
    color: '#000',
  },
});

export default Countdown;
