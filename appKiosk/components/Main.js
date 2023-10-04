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
import Subscribe from './Subscribe';
import {Observer} from 'mobx-react';
import Countdown from './Countdown';

// 예약가능 #fd6b00
// 사용중 #ffffff
// 예약불가  #6f6f6f

const statusColor = {
  reservationAvailable: '#fd6b00', // 이용중
  emptySeat: '#fafafa', // 빈타석
  notAvailable: '#6f6f6f', // ⭐️ 이용불가 -> 10월 말까지는 신경 x
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

  const [modalData, setModalData] = useState(null);

  const clickSeat = (index, seatData) => {
    setModalData(seatData);

    if (selectedSeatIndex === index) {
      setSelectedSeatIndex(-1); // 같은 항목을 다시 클릭하면 취소
      footerStore.offBtn();
    } else {
      setSelectedSeatIndex(index); // 클릭한 항목의 인덱스를 업데이트
      footerStore.onBtn();
      // 클릭 시
    }
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
            uri="https://broj.s3.ap-northeast-2.amazonaws.com/jgroup/1234/station-area/Area.svg"
            onLayout={onLayout}
          />
          {seatStore.seatDataList['station_info_list'].map(
            (seatData, index) => (
              <TouchableOpacity
                key={index} // Add a unique key
                onPress={() => clickSeat(index, seatData)} // TouchableOpacity 클릭 시 팝업창 열림
                style={{
                  width: parseInt(seatData.station_width) + 20,
                  height: parseInt(seatData.station_height) + 50,
                  backgroundColor: statusColor[seatData.status],
                  position: 'absolute',
                  left: parseInt(seatData.x_coordinate) + seatAreaX,
                  top: parseInt(seatData.y_coordinate) + seatAreaY,
                  borderWidth: 3,
                  borderRadius: 10,
                  borderColor: selectedSeatIndex === index ? 'blue' : '#000000', // 선택된 항목일 때 다른 색상
                  // justifyContent: 'center',
                  // alignItems: 'center',
                  padding: 10,
                }}
                disabled={
                  seatData.status === 'reservationAvailable' ? true : false
                }>
                {/* {seatData.status === 'notAvailable' ? (
                  <View style={[styles.notAvailable]}>
                    <Text style={styles.notAvailableText}>예약불가</Text>
                  </View>
                ) : ( */}
                <View style={styles.infoText}>
                  <Text style={styles.seatNumText}>{index + 1} 번</Text>
                  {/* <Text style={styles.remainingTimeText}>
                      {seatData.useTime}
                    </Text> */}

                  {seatData.useTime === 0 ? null : (
                    <Countdown useTime={seatData.useTime} seatData={seatData} />
                  )}
                  {seatData.status === 'emptySeat' ? null : (
                    <View style={{borderWidth: 0.5}}></View>
                  )}
                  <View style={styles.pending}>
                    <Text style={styles.pendingText}></Text>
                  </View>
                </View>
                {/* )} */}
              </TouchableOpacity>
            ),
          )}
          {footerStore.reserveBtn ? (
            <Subscribe
              modalData={modalData}
              seatStore={seatStore}
              resetSelectedSeatIndex={resetSelectedSeatIndex}
            />
          ) : null}
        </View>
      )}
    </Observer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    alignItems: 'center',
  },
  seatNumText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  notAvailable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notAvailableText: {
    fontSize: 20,
    color: 'white',
  },
  infoText: {
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

export default Main;
