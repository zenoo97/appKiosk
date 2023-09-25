import React from 'react';
import {View, Text} from 'react-native';
import Main from '../components/Main';
import indexStore from '../stores/IndexStore';
import {Observer} from 'mobx-react';
const MainContainer = () => {
  const {footerStore, seatStore} = indexStore();
  return (
    <Observer>
      {() => <Main footerStore={footerStore} seatStore={seatStore} />}
    </Observer>
  );
};

export default MainContainer;
