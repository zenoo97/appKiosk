import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

import HeaderContainer from './src/container/HeaderContainer';
import FooterContainer from './src/container/FooterContainer';

import Subscribe from './src/components/seatReservation/Subscribe';
import StatusBar from './src/components/home/StatusBar';
import HomeContainer from './src/container/HomeContainer';

function App() {
  return (
    <View style={styles.container}>
      <HeaderContainer />
      <StatusBar />
      <HomeContainer />
      <FooterContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: 1080,
    // height: 1920,
    backgroundColor: 'white',
  },
});

export default App;
