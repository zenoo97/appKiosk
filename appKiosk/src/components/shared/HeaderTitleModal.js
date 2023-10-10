// ⭐️ 추후 로고 클릭시 모달창 띄우기 기능

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
import indexStore from '../../stores/IndexStore';

const HeaderTitleModal = () => {
  const {headerStore} = indexStore();
  //   const {titleModalStatus, offTitleModal} = headerStore();
  //   console.log(headerStore.titleModalStatus + 'in headerTitleModal');
  return (
    <Observer>
      {() => (
        <View style={styles.centeredView}>
          <Modal
            animationType="none"
            transparent={true}
            visible={headerStore.titleModalStatus}
            onRequestClose={() => {
              headerStore.offTitleModal();
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={styles.titleInfo}>
                  <Text style={styles.titleInfoText}>
                    mac address : 1v:3d:3a:2d
                  </Text>
                  <Text style={styles.titleInfoText}>
                    IP 주소: 168.231.232{' '}
                  </Text>
                  <Text style={styles.titleInfoText}>현재 버전: 5.0.3.38</Text>
                  <Text style={styles.titleInfoText}>
                    문의 메일: test@naver.com
                  </Text>
                </View>
                <View style={styles.btn}>
                  <Pressable
                    style={styles.btnClose}
                    onPress={() => headerStore.offTitleModal()}>
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
    flex: 1,
    justifyContent: 'center', // 세로 중앙 정렬
    alignItems: 'center', // 가로 중앙 정렬
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  titleInfo: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  titleInfoText: {
    paddingVertical: 10,
    fontSize: 20,
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
    padding: 10,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  item: {
    flexDirection: 'row',
  },
  items: {
    borderWidth: 1,
    backgroundColor: '#eeeeee',
    padding: 30,
    borderRadius: 5,
    margin: 10,
  },
  btnClose: {
    backgroundColor: '#fd6b00',
    borderRadius: 10,
  },
});
export default HeaderTitleModal;
