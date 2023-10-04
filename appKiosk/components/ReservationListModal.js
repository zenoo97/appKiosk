import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Observer} from 'mobx-react';
import indexStore from '../stores/IndexStore';
const ReservationListModal = () => {
  const {reservationListStore} = indexStore();
  const {reservationListStatus, onReservationList, offReservationList} =
    reservationListStore;
  //   const {titleModalStatus, offTitleModal} = headerStore();
  //   console.log(headerStore.titleModalStatus + 'in headerTitleModal');
  return (
    <Observer>
      {() => (
        <View style={styles.centeredView}>
          <Modal
            animationType="none"
            transparent={true}
            visible={reservationListStore.reservationListStatus}
            onRequestClose={() => {
              reservationListStore.offReservationList();
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View>
                  <Pressable
                    onPress={() => reservationListStore.offReservationList()}>
                    <Text style={styles.closeBtn}>닫기</Text>
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
    flex: 1,
    justifyContent: 'center', // 세로 중앙 정렬
    alignItems: 'center', // 가로 중앙 정렬
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    // backgroundColor: 'red',
  },

  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 200,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  closeBtn: {
    backgroundColor: '#fa6402',
    padding: 10,
  },
});
export default ReservationListModal;
