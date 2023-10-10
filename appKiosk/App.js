import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

import HeaderContainer from './container/HeaderContainer';
import FooterContainer from './container/FooterContainer';
import MainContainer from './container/MainContainer';
import Subscribe from './components/Subscribe';
import StatusBar from './components/StatusBar';

function App() {
  return (
    <View style={styles.container}>
      <HeaderContainer />
      <StatusBar />
      <MainContainer />

      <FooterContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    width: 1080,
    height: 1920,
  },
});

export default App;
