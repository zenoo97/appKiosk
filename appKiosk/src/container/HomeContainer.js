import React from 'react';
import {View, Text} from 'react-native';
import Home from '../components/home/Home';
import indexStore from '../stores/IndexStore';
import {Observer} from 'mobx-react';
const HomeContainer = () => {
  const {footerStore, seatStore} = indexStore();
  return (
    <Observer>
      {() => <Home footerStore={footerStore} seatStore={seatStore} />}
    </Observer>
  );
};

export default HomeContainer;
