import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';

import HeaderContainer from './container/HeaderContainer';
import FooterContainer from './container/FooterContainer';
import MainContainer from './container/MainContainer';
import Subscribe from './components/Subscribe';

function App() {
  return (
    <View style={styles.container}>
      <HeaderContainer />
      <MainContainer />
      <FooterContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
