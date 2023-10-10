import {height, scale, width} from '../../config/globalStyles';
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import indexStore from '../../stores/IndexStore';
import {Observer} from 'mobx-react';

const Keypad = ({openTicket}) => {
  console.log(openTicket);
  const keypad = [
    {
      id: 1,
      name: 'one',
    },
    {
      id: 2,
      name: 'two',
    },
    {
      id: 3,
      name: 'three',
    },
    {
      id: 4,
      name: 'four',
    },
    {
      id: 5,
      name: 'five',
    },
    {
      id: 6,
      name: 'six',
    },
    {
      id: 7,
      name: 'seven',
    },
    {
      id: 8,
      name: 'eight',
    },
    {
      id: 9,
      name: 'nine',
    },
    {
      id: '<', // img 넣기
      name: 'delete',
    },
    {
      id: 0,
      name: 'zero',
    },
    {
      id: '전체지우기',
      name: 'deleteAll',
    },
  ];

  const renderKeypadRow = () => {
    const rows = [];
    for (let i = 0; i < keypad.length; i += 3) {
      const row = keypad.slice(i, i + 3);
      rows.push(
        <View key={i} style={styles.keypadRow}>
          {row.map(item => (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.keypadBtn,
                {
                  backgroundColor:
                    item.name === 'deleteAll' || item.name === 'delete'
                      ? 'rgba(0, 0, 0, 0.08)'
                      : '#FFE8D9',
                },
              ]}
              onPress={userNameHandler}>
              <Text>{item.id}</Text>
            </TouchableOpacity>
          ))}
        </View>,
      );
    }
    return rows;
  };
  const {seatStore, footerStore} = indexStore();
  const {reserveBtn, offReserveBtn} = footerStore;
  const {closeUserBtn} = seatStore;
  const [number, setNumber] = useState('010');
  const userNameHandler = text => {
    setNumber(curr => curr + text);
  };
  return (
    <Observer>
      {() => (
        <View style={styles.container}>
          <Text style={styles.infoText}>회원 번호를 입력해주세요</Text>
          <TextInput
            style={styles.userInput}
            onChangeText={userNameHandler}
            value={number}
          />
          <View style={styles.keypad}>{renderKeypadRow()}</View>
          <View style={styles.btn}>
            <TouchableOpacity
              style={[styles.okCancelBtn, {backgroundColor: '#FA6400'}]}
              onPress={() => seatStore.openUserInfo()}>
              <Text style={[styles.btnText, {color: 'white'}]}>확인</Text>
            </TouchableOpacity>
            <View style={{paddingHorizontal: 10 * width}}></View>
            <TouchableOpacity
              style={[
                styles.okCancelBtn,
                {backgroundColor: 'rgba(0, 0, 0, 0.08)'},
              ]}
              onPress={() => footerStore.offReserveBtn()}>
              <Text style={styles.btnText}>취소</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Observer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  infoText: {
    paddingTop: 67 * height,
    paddingBottom: 31 * height,
    fontSize: 50 * scale,
  },
  userInput: {
    backgroundColor: '#eeeeee',
    width: 380 * width,
    height: 60 * height,
  },
  keypad: {
    paddingTop: 31 * height,
    flexDirection: 'column', // 세로로 배치
    justifyContent: 'center',
    alignItems: 'center',
  },
  keypadRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10, // 행 사이의 간격 조절
  },
  keypadBtn: {
    width: 120 * width,
    height: 75 * height,
    paddingHorizontal: 30 * width,
    paddingVertical: 20 * height,

    borderRadius: 20,
    marginHorizontal: 5, // 버튼 사이의 간격 조절
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    flexDirection: 'row',
  },
  okCancelBtn: {
    width: 175 * width,
    height: 80 * height,
    padding: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 30 * scale,
  },
});

export default Keypad;
