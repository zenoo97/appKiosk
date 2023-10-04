import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Observer} from 'mobx-react';
const Footer = ({footerStore}) => {
  const reserveBtnHandler = () => {
    footerStore.onReserveBtn();
    console.log('modal on');
  };
  const Divider = () => {
    return <View style={{paddingHorizontal: 10}}></View>;
  };
  return (
    <Observer>
      {() => (
        // <View
        //   style={[
        //     styles.footer,
        //     {backgroundColor: !footerStore.changeBtn ? '#dedede' : '#fd6b00'},
        //   ]}>
        //   <TouchableOpacity
        //     disabled={!footerStore.changeBtn ? true : false}
        //     onPress={reserveBtnHandler}>
        //     <Text style={styles.reserveBtnText}>
        //       {!footerStore.changeBtn
        //         ? '예약하실 좌석을 선택해주세요'
        //         : '예약하기'}
        //     </Text>
        //   </TouchableOpacity>
        // </View>
        <View style={styles.footer}>
          {!footerStore.changeBtn ? (
            <View>
              <Text style={{fontSize: 40}}>예약하실 좌석을 선택해주세요</Text>
            </View>
          ) : (
            <>
              <TouchableOpacity
                style={styles.reservation}
                onPress={reserveBtnHandler}>
                <Text style={styles.reservationText}>예약하기</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.reservationList}>
                <Text style={styles.reservationListText}>예약자 리스트</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      )}
    </Observer>
  );
};
// '#dedede',#fd6b00
const styles = StyleSheet.create({
  // footer: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   width: '100%',
  // },
  // reserveBtnText: {
  //   fontSize: 35,
  //   padding: 10,
  //   fontWeight: 'bold',
  //   // backgroundColor: 'red',
  //   width: '100%',
  // },
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#dedede',
    width: '100%',
  },
  reservation: {
    backgroundColor: '#fd6b00',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  reservationText: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  reservationList: {
    backgroundColor: '#dedede',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  reservationListText: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});
export default Footer;
