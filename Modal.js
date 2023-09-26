import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
} from "react-native";

const LoginMidal = (props) => {
  console.log(props.modalData);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="none"
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!props.modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View>
              <View>
                <Text style={styles.seatNumText}>
                  좌석번호: {props.modalData.station_num}
                </Text>
                <View>
                  <Subscribe />
                </View>
              </View>
            </View>
            <View style={styles.btn}>
              <Pressable
                style={[styles.button, styles.memberButtonClose]}
                onPress={props.closeModal}
              >
                <Text style={styles.textStyle}>예약</Text>
              </Pressable>
              <View style={{ padding: 10 }}></View>
              <Pressable
                style={[styles.button, styles.guestButtonClose]}
                onPress={props.closeModal}
              >
                <Text style={styles.textStyle}>닫기</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: "rgba(0, 0, 0, 0.5)",

    position: "absolute",
    width: "100%",
    height: "100%",
    // flex: 1,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,

    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: 500,
    height: 500,
    padding: 30,

    // justifyContent: 'center',
    // alignItems: 'center',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  memberButtonClose: {
    backgroundColor: "#2196F3",
  },
  guestButtonClose: {
    backgroundColor: "darkgray",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
  },
  selectMode: {
    flexDirection: "row",
  },
  member: {
    backgroundColor: "#2196F3",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 2,
    paddingVertical: 25,
  },
  memberText: {
    color: "white",
  },
  guest: {
    backgroundColor: "darkgray",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 2,
  },
  guestText: {
    color: "white",
  },
  btn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Modal;
