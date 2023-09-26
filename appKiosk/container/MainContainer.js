import React from 'react';
import {View, Text} from 'react-native';
import Main from '../components/Main';
import indexStore from '../stores/IndexStore';
const MainContainer = () => {
  const {footerStore, seatStore} = indexStore();
  return <Main footerStore={footerStore} seatStore={seatStore} />;
};

export default MainContainer;
