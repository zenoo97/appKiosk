import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import indexStore from '../../stores/IndexStore';
import {Observer} from 'mobx-react';
import produce from 'immer';
import Keypad from './Keypad';
import {height, scale, width} from '../../config/globalStyles';
import {action, runInAction} from 'mobx';

const Subscribe = props => {
  const [userName, setUserName] = useState('');
  const [selectedUser, setSelectedUser] = useState(true); // 유저 선택 status 관리, false: 비회원, true: 회원
  // const [openTicket, setOpenTicket] = useState(false);
  const {footerStore, seatStore, ticketStore} = indexStore();
  const {selectedSeatData, selectedSeatIndex} = props;
  const [isSelected, setIsSelected] = useState(false);
  const {tickets} = ticketStore;
  const {openTicket} = seatStore;
  // console.log(tickets);
  // console.log(JSON.stringify(selectedSeatData) + '번 타석 선택');
  console.log(selectedSeatData);
  const offReserveBtn = () => {
    footerStore.offReserveBtn();
    runInAction(() => {
      seatStore.openTicket = false;
    });
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
    selectedSeatData;
    props.resetSelectedSeatIndex();
    seatStore.seatUpdate(
      selectedSeatData.status,
      selectedSeatData.key,
      tickets[selectedTicketIndex].name,
      userName,
    );
    // console.log(item[selectedItemIndex].name + '초 이용권 선택');
    footerStore.offBtn();
    runInAction(() => {
      seatStore.openTicket = false;
    });
    setUserName('');
  };

  const userBtnHandler = () => {
    console.log('user btn click');
    setSelectedUser(curr => true);
  };
  const nonUserBtnHandler = () => {
    console.log('non user btn click');
    setSelectedUser(curr => false);
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
              <View
                style={[
                  styles.modalView,
                  {
                    height: seatStore.openTicket ? height * 792 : 1097 * height,
                  },
                ]}>
                {seatStore.openTicket ? (
                  <>
                    <View style={styles.seatNum}>
                      <Text style={styles.seatNumText}>
                        {selectedSeatData.station_name.split('_')[1]}번 타석
                      </Text>
                      <Text style={styles.selectSeatUseTime}>
                        타석 이용 시간을 설정해주세요
                      </Text>
                    </View>
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
                              marginRight:
                                index !== tickets.length - 1 ? 49.59 : 0,
                            },
                          ]}
                          onPress={() => ticketHandler(index)}>
                          <Text style={styles.ticketTime}>{ticket.id}</Text>
                        </TouchableOpacity>
                      ))}
                    </View>
                    {selectedTicketIndex === -1 ? (
                      <View style={{paddingTop: 104 * height}}>
                        <TouchableOpacity
                          style={styles.cancelBtn}
                          onPress={() => offReserveBtn()}>
                          <Text style={styles.cancelText}>취소</Text>
                        </TouchableOpacity>
                      </View>
                    ) : (
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
                            사용
                          </Text>
                        </Pressable>
                        <View style={{paddingHorizontal: 28}}></View>
                        <Pressable
                          style={[
                            styles.button,
                            styles.buttonClose,
                            {backgroundColor: 'darkgrey'},
                          ]}
                          onPress={() => offReserveBtn()}>
                          <Text style={[styles.textStyle, {color: 'black'}]}>
                            취소
                          </Text>
                        </Pressable>
                      </View>
                    )}
                  </>
                ) : (
                  <Keypad />
                )}
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
    width: 866 * width,
    height: 792 * height,
    alignItems: 'center',
  },
  seatNum: {
    paddingTop: 84 * height,
    alignItems: 'center',
    color: '#000',
  },
  seatNumText: {
    fontSize: 70 * scale,
    fontWeight: '500',
    color: '#000000',
  },
  selectSeatUseTime: {
    color: '#000000',
    fontSize: 40 * scale,
    fontWeight: '400',
    paddingTop: 22 * height,
  },
  ticket: {
    flexDirection: 'row',
    paddingTop: 34 * height,
    paddingHorizontal: 14.133 * width,
    paddingVertical: 14.133 * height,
  },
  tickets: {
    // borderWidth: 1,
    backgroundColor: '#eeeeee',
    paddingVertical: 30 * height,
    paddingHorizontal: 30 * width,
    borderRadius: 24.795,
    width: 212 * width,
    height: 212 * height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ticketTime: {
    fontSize: 70.667 * scale,
    color: '#000',
    // textAlign: 'center',
  },
  btn: {
    flexDirection: 'row',
    paddingTop: 104 * height,
  },
  button: {
    width: 340 * width,
    height: 120 * height,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20 * width,
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 50,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },

  userInput: {
    backgroundColor: '#eeeeee',
    width: 200,
    padding: 15,
  },
  selectUser: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  user: {
    // flex: 1,
    backgroundColor: 'green',
    paddingHorizontal: 50,
    paddingVertical: 10,
  },
  nonUser: {
    // flex: 1,
    backgroundColor: 'yellow',
    paddingHorizontal: 50,
    paddingVertical: 10,
  },
  userText: {
    fontSize: 20,
  },
  nonUserText: {
    fontSize: 20,
  },
  cancelBtn: {
    width: 735 * width,
    height: 120 * height,

    backgroundColor: 'rgba(0, 0, 0, 0.25);',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelText: {
    fontSize: 50 * scale,
    color: '#000',
  },
});
export default Subscribe;
