import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SvgUri} from 'react-native-svg';
import Modal from './Modal'; // 팝업창 컴포넌트 import
import indexStore from '../stores/FooterStore';

// 예약가능 #fd6b00
// 사용중 #ffffff
// 예약불가  #6f6f6f
const data = {
  area_info: {
    area_name: 'Area.svg',
    area_width: '1440',
    area_height: '1024',
  },
  station_info_list: [
    {
      station_num: '1',
      x_coordinate: '674',
      y_coordinate: '300',
      station_width: '110',
      station_height: '62',
      station_color: '#D9D9D9',
      status: 'beInUse', // 사용중
    },
    {
      station_num: '2',
      x_coordinate: '821',
      y_coordinate: '300',
      station_width: '110',
      station_height: '62',
      station_color: '#D9D9D9',
      status: 'notAvailable', // 예약불가
    },
    {
      station_num: '3',
      x_coordinate: '968',
      y_coordinate: '430',
      station_width: '110',
      station_height: '62',
      station_color: '#D9D9D9',
      status: 'reservationAvailable', // 예약가능
    },
    {
      station_num: '4',
      x_coordinate: '944',
      y_coordinate: '560',
      station_width: '110',
      station_height: '62',
      station_color: '#D9D9D9',
      status: 'beInUse', // 사용중
    },
    {
      station_num: '5',
      x_coordinate: '756',
      y_coordinate: '453',
      station_width: '110',
      station_height: '62',
      station_color: '#D9D9D9',
      status: 'notAvailable', // 예약불가
    },
  ],
};
const statusColor = {
  reservationAvailable: '#fd6b00',
  beInUse: '#ffffff',
  notAvailable: '#6f6f6f',
};
const Main = ({seatStore, footerStore}) => {
  const [seatAreaX, setSeatAreaX] = useState(0); // area에 y값
  const [seatAreaY, setSeatAreaY] = useState(0); // area에 y값
  const [selectedSeatIndex, setSelectedSeatIndex] = useState(-1);
  const [seatStatus, setSeatStatus] = useState(false);
  const onLayout = e => {
    const {layout} = e.nativeEvent; // layout 추출
    setSeatAreaX(layout.x);
    setSeatAreaY(layout.y);
    console.log('onLayout', layout); // layout 출력
  };

  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const [modalData, setModalData] = useState(null);
  const modalhandle = data => {
    setModalData(data);
    openModal();
  };

  const clickSeat = (index, seatData) => {
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

  return (
    <View style={styles.container}>
      <SvgUri
        uri="https://broj.s3.ap-northeast-2.amazonaws.com/jgroup/1234/station-area/Area.svg"
        onLayout={onLayout}
      />
      {data.station_info_list.map((seatData, index) => (
        <TouchableOpacity
          key={index} // Add a unique key
          onPress={() => clickSeat(index, seatData)} // TouchableOpacity 클릭 시 팝업창 열림
          style={{
            width: parseInt(seatData.station_width),
            height: parseInt(seatData.station_height),
            backgroundColor: statusColor[seatData.status],
            position: 'absolute',
            left: parseInt(seatData.x_coordinate) + seatAreaX,
            top: parseInt(seatData.y_coordinate) + seatAreaY,
            borderWidth: 3,
            borderRadius: 10,
            padding: 10,
            borderColor: selectedSeatIndex === index ? '#fd6d22' : '#000000', // 선택된 항목일 때 다른 색상
          }}
          disabled={seatData.status === 'notAvailable' ? true : false}>
          {seatData.status === 'notAvailable' ? (
            <View style={styles.notAvailable}>
              <Text style={styles.notAvailableText}>예약불가</Text>
            </View>
          ) : (
            <View style={styles.infoText}>
              <Text style={styles.seatNumText}>{index + 1} 번</Text>
              <Text style={styles.remainingTimeText}>1:30분 남음</Text>
            </View>
          )}
        </TouchableOpacity>
      ))}

      {modalVisible ? (
        <Modal
          modalVisible={modalVisible}
          closeModal={closeModal}
          modalData={modalData}
        />
      ) : null}
    </View>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  notAvailableText: {
    fontSize: 20,
    color: 'white',
  },
});

export default Main;
