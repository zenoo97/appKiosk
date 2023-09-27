import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';

import HeaderContainer from './container/HeaderContainer';
import FooterContainer from './container/FooterContainer';
import MainContainer from './container/MainContainer';

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
    backgroundColor: 'skyblue',
    // justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  footer: {
    flex: 1,
    backgroundColor: '#dedede',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

  reserveBtnText: {
    fontSize: 35,
    padding: 10,
    fontWeight: 'bold',
  },
});

export default App;
