import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Observer} from 'mobx-react';
const Footer = ({footerStore}) => {
  const reserveBtnHandler = () => {
    footerStore.onReserveBtn();
    console.log('modal on');
  };
  return (
    <Observer>
      {() => (
        <View
          style={[
            styles.footer,
            {backgroundColor: !footerStore.changeBtn ? '#dedede' : '#fd6b00'},
          ]}>
          <TouchableOpacity
            disabled={!footerStore.changeBtn ? true : false}
            onPress={reserveBtnHandler}>
            <Text style={styles.reserveBtnText}>
              {!footerStore.changeBtn
                ? '예약하실 좌석을 선택해주세요'
                : '예약하기'}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </Observer>
  );
};
// '#dedede',#fd6b00
const styles = StyleSheet.create({
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

  reserveBtnText: {
    fontSize: 35,
    padding: 10,
    fontWeight: 'bold',
    // backgroundColor: 'red',
    width: '100%',
  },
});
export default Footer;
