import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Pressable,
  View,
} from 'react-native';
import {SvgUri} from 'react-native-svg';
// import Modal from './Modal'; // 팝업창 컴포넌트 import
import Subscribe from '../seatReservation/Subscribe';
import {Observer} from 'mobx-react';
import SeatCountdown from './SeatCountdown';
import StatusBar from './StatusBar';
import {height, scale, width} from '../../config/globalStyles';

// 예약가능 #fd6b00
// 사용중 #ffffff
// 예약불가  #6f6f6f
const statusColor = {
  used: '#fd6b00',
  empty: '#fafafa',
  notAvailable: '#6f6f6f',
};
const Main = ({seatStore, footerStore}) => {
  const [seatAreaX, setSeatAreaX] = useState(0); // area에 y값
  const [seatAreaY, setSeatAreaY] = useState(0); // area에 y값
  const [selectedSeatIndex, setSelectedSeatIndex] = useState(-1);

  const onLayout = e => {
    const {layout} = e.nativeEvent; // layout 추출
    setSeatAreaX(layout.x);
    setSeatAreaY(layout.y);
    // console.log('onLayout', layout); // layout 출력
  };

  const [selectedSeatData, setSelectedSeatData] = useState(null);
  const clickSeat = (seatData, index) => {
    setSelectedSeatData(seatData);

    if (selectedSeatIndex === index) {
      setSelectedSeatIndex(-1); // 같은 항목을 다시 클릭하면 취소
      footerStore.offBtn();
    } else {
      setSelectedSeatIndex(index); // 클릭한 항목의 인덱스를 업데이트
      footerStore.onBtn();
      // 클릭 시
    }
    // console.log(selectedSeatData);

    // 클릭 시 실행
  };
  const resetSelectedSeatIndex = () => {
    setSelectedSeatIndex(-1);
  };

  return (
    <Observer>
      {() => (
        <View style={styles.container}>
          <SvgUri
            uri={`https://broj.s3.ap-northeast-2.amazonaws.com/${seatStore.seatDataList['area_info'].svg_file_name}`}
            onLayout={onLayout}
          />
          {seatStore.seatDataList['station_info_list'].map(
            (seatData, index) => (
              <TouchableOpacity
                key={index} // Add a unique key
                onPress={() => clickSeat(seatData, index)} // TouchableOpacity 클릭 시 팝업창 열림
                style={{
                  width: parseInt(seatData.station_width),
                  height: parseInt(seatData.station_height),
                  backgroundColor: statusColor[seatData.status],
                  position: 'absolute',
                  left: parseInt(seatData.x_coordinate) + seatAreaX,
                  top: parseInt(seatData.y_coordinate) + seatAreaY,
                  borderWidth: 3,
                  borderRadius: 10,
                  borderColor: selectedSeatIndex === index ? 'blue' : '#000000', // 선택된 항목일 때 다른 색상
                  // justifyContent: 'center',
                  // alignItems: 'center',
                }}
                disabled={seatData.status === 'used' ? true : false}>
                <View style={styles.infoText}>
                  <Text style={styles.seatNumText}>
                    {seatData.station_name.split('_')[1]} 번
                  </Text>
                  {seatData.use_time === 0 ? null : (
                    <SeatCountdown
                      use_time={seatData.use_time}
                      seatData={seatData}
                    />
                  )}
                </View>
              </TouchableOpacity>
            ),
          )}
          {footerStore.reserveBtn ? (
            <Subscribe
              selectedSeatData={selectedSeatData}
              seatStore={seatStore}
              resetSelectedSeatIndex={resetSelectedSeatIndex}
              selectedSeatIndex={selectedSeatIndex}
            />
          ) : null}
        </View>
      )}
    </Observer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'green',
    width: 1080 * width,
    height: 1572 * height,
    // backgroundColor: '#EEE',
  },

  seatNumText: {
    fontWeight: '700',
    fontSize: 25 * scale,
  },
  notAvailable: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  notAvailableText: {
    fontSize: 20 * scale,
    color: 'white',
  },
  infoText: {
    justifyContent: 'center',
    paddingHorizontal: 10 * width,
    paddingVertical: 10 * height,
  },
});

export default Main;
