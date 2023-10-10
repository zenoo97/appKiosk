import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Observer} from 'mobx-react';
import {height, scale} from '../config/globalStyles';
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
        <View
          style={[
            styles.container,
            {backgroundColor: !footerStore.changeBtn ? '#D9D9D9' : '#FA6400'},
          ]}>
          <TouchableOpacity
            disabled={!footerStore.changeBtn ? true : false}
            onPress={reserveBtnHandler}>
            <Text
              style={[
                styles.reserveBtnText,
                {color: footerStore.changeBtn ? 'white' : 'black'},
              ]}>
              {!footerStore.changeBtn
                ? '사용하실 좌석을 선택해주세요'
                : '바로 입장하기'}
            </Text>
          </TouchableOpacity>
        </View>
        // <View style={styles.footer}>
        //   {!footerStore.changeBtn ? (
        //     <View>
        //       <Text style={{fontSize: 40}}>예약하실 좌석을 선택해주세요</Text>
        //     </View>
        //   ) : (
        //     <>
        //       <TouchableOpacity
        //         style={styles.reservation}
        //         onPress={reserveBtnHandler}>
        //         <Text style={styles.reservationText}>예약하기</Text>
        //       </TouchableOpacity>
        //       <TouchableOpacity style={styles.reservationList}>
        //         <Text style={styles.reservationListText}>예약자 리스트</Text>
        //       </TouchableOpacity>
        //     </>
        //   )}
        // </View>
      )}
    </Observer>
  );
};
// '#dedede',#fd6b00
const styles = StyleSheet.create({
  container: {
    width: 1080,
    height: 150 * height,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    flexShrink: 0,
  },
  reserveBtnText: {
    fontSize: 50 * scale,
    fontWeight: '500',
    color: '#000000',
    fontFamily: 'Pretendard',
  },
  // footer: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   flexDirection: 'row',
  //   backgroundColor: '#dedede',
  //   width: '100%',
  // },
  // reservation: {
  //   backgroundColor: '#fd6b00',
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   height: '100%',
  // },
  // reservationText: {
  //   fontSize: 40,
  //   fontWeight: 'bold',
  // },
  // reservationList: {
  //   backgroundColor: '#dedede',
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   height: '100%',
  // },
  // reservationListText: {
  //   fontSize: 40,
  //   fontWeight: 'bold',
  // },
});
export default Footer;
