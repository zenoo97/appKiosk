import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
} from 'react-native';
import indexStore from '../stores/IndexStore';
import {Observer} from 'mobx-react';
import produce from 'immer';

const Subscribe = props => {
  const {footerStore, seatStore, ticketStore} = indexStore();
  const {selectedSeatData, selectedSeatIndex} = props;
  const {tickets} = ticketStore;
  // console.log(tickets);
  // console.log(JSON.stringify(selectedSeatData) + '번 타석 선택');
  const offReserveBtn = () => {
    footerStore.offReserveBtn();
    console.log('modal off');
  };
  const [selectedTicketIndex, setSelectedTicketIndex] = useState(-1);

  const ticketHandler = index => {
    // console.log(item[index].name);
    if (selectedTicketIndex === index) {
      setSelectedTicketIndex(-1); // 같은 항목을 다시 클릭하면 취소
    } else {
      setSelectedTicketIndex(index); // 클릭한 항목의 인덱스를 업데이트
      // 클릭 시
    }
  };
  const reserveHandler = selectedTicketIndex => {
    // console.log(`${selectedSeatData.station_num}번 타석 예약이 되었습니다.`);
    // console.log(`${item[selectedItemIndex].name} 이용권 확정`);
    console.log(selectedSeatData);
    props.resetSelectedSeatIndex();
    seatStore.seatUpdate(
      selectedSeatData.status,
      selectedSeatData.key,
      tickets[selectedTicketIndex].name,
    );
    // console.log(item[selectedItemIndex].name + '초 이용권 선택');
    footerStore.offBtn();
  };
  return (
    <Observer>
      {() => (
        <View style={styles.centeredView}>
          <Modal
            animationType="none"
            transparent={true}
            visible={footerStore.reserveBtn}
            onRequestClose={() => {
              offReserveBtn();
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>
                  좌석번호 : {selectedSeatData.station_name.split('_')[1]}번
                </Text>
                <View style={styles.ticket}>
                  {tickets.map((ticket, index) => (
                    <TouchableOpacity
                      key={index}
                      style={[
                        styles.tickets,
                        {
                          borderColor:
                            selectedTicketIndex === index
                              ? '#fd6d22'
                              : '#000000',
                          backgroundColor:
                            selectedTicketIndex === index
                              ? '#ffe0cc'
                              : '#eeeeee',
                        },
                      ]}
                      onPress={() => ticketHandler(index)}>
                      <Text>{ticket.id}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
                <View style={styles.btn}>
                  <Pressable
                    style={[
                      styles.button,
                      styles.buttonClose,
                      {backgroundColor: '#fa6402'},
                    ]}
                    onPress={() => {
                      reserveHandler(selectedTicketIndex);
                      footerStore.offReserveBtn();
                    }}>
                    <Text style={[styles.textStyle, {color: 'white'}]}>
                      예약
                    </Text>
                  </Pressable>
                  <View style={{paddingHorizontal: 10}}></View>
                  <Pressable
                    style={[
                      styles.button,
                      styles.buttonClose,
                      {backgroundColor: 'darkgrey'},
                    ]}
                    onPress={() => offReserveBtn()}>
                    <Text style={[styles.textStyle, {color: 'black'}]}>
                      닫기
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      )}
    </Observer>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'center', // 세로 중앙 정렬
    alignItems: 'center', // 가로 중앙 정렬
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },

  modalView: {
    // margin: 20,

    backgroundColor: 'white',
    borderRadius: 20,
    padding: '20%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  btn: {
    flexDirection: 'row',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  ticket: {
    flexDirection: 'row',
  },
  tickets: {
    borderWidth: 1,
    backgroundColor: '#eeeeee',
    padding: 30,
    borderRadius: 5,
    margin: 10,
  },
});
export default Subscribe;
