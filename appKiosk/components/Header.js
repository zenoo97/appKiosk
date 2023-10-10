import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Observer} from 'mobx-react';
import HeaderTitleModal from './HeaderTitleModal';
import {height, scale, width} from '../config/globalStyles';

// 요일을 한글로 변환
const Header = ({headerStore}) => {
  const weekday = ['일', '월', '화', '수', '목', '금', '토'];
  const [dateString, setDateString] = useState('');
  const [timeString, setTimeString] = useState('');
  // 요일 및 시간 업데이트 함수
  const updateDateTime = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const day = ('0' + today.getDate()).slice(-2);
    const getday = today.getDay();
    const formattedDateString = `${year}.${month}.${day}.(${weekday[getday]})`;
    setDateString(formattedDateString);

    const options = {hour: 'numeric', minute: '2-digit', hour12: true};
    const currentTime = today.toLocaleTimeString('en-US', options);
    const timeParts = currentTime.split(' ');
    let formattedTimeString = timeParts[0];
    if (timeParts[1] === 'AM') {
      formattedTimeString = '오전 ' + formattedTimeString;
    } else {
      formattedTimeString = '오후 ' + formattedTimeString;
    }
    setTimeString(formattedTimeString);
  };

  useEffect(() => {
    // 초기 시간 및 날짜 설정
    updateDateTime();

    // 1초마다 시간 및 날짜 업데이트
    const intervalId = setInterval(updateDateTime, 1000);

    // 컴포넌트 언마운트 시에 clearInterval로 간격 함수 제거
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  // const {titleModalStatus, onTitleModal, offTitleModal} = headerStore;
  const titleModalHandler = () => {
    if (headerStore.titleModalStatus === false) {
      headerStore.onTitleModal();
    }
  };
  return (
    <Observer>
      {() => (
        <View style={styles.container}>
          <View onPress={titleModalHandler} style={styles.logo}>
            <Text style={styles.logoText}>
              {headerStore.headerTitle === ''
                ? '브로제이 골프'
                : headerStore.headerTitle}
            </Text>
          </View>
          <View style={styles.dateView}>
            <Text style={styles.date}>{dateString}</Text>
            <Text style={styles.time}>{timeString}</Text>
          </View>
          {headerStore.titleModalStatus ? <HeaderTitleModal /> : null}
        </View>
      )}
    </Observer>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'black',
    // alignItems: 'center',
    flexDirection: 'row',
    // flex: 0.5,
    // // width: '100%',
    justifyContent: 'space-between',
    // alignItems: 'center',
    // alignItems: 'flex-end',
    // paddingHorizontal: 60,
    width: 1080,
    height: 191 * height,
    backgroundColor: '#2E2E2E',
  },
  logo: {
    paddingLeft: 67 * width,
    paddingTop: 72 * height,
    // paddingBottom: 59 * height,
  },
  logoText: {
    fontSize: 50 * scale,
    color: '#FFF',
    fontWeight: '700',
    // fontFamily: 'Pretendard',
    // lineHeight: 'normal',
  },
  dateView: {
    paddingTop: 48 * height,
    paddingRight: 67 * width,

    // textAlign: 'right',
  },
  date: {
    color: '#FFFFFF',
    fontSize: 30 * scale,
    fontWeight: '700',
    textAlign: 'right',
  },
  time: {
    color: '#FFF',
    fontSize: 50 * scale,
    fontWeight: '700',
  },
});
