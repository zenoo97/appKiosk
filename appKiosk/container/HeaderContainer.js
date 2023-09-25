import React, {Component} from 'react';
import Header from '../components/Header';
import indexStore from '../stores/IndexStore';
import {Observer} from 'mobx-react';

const HeaderContainer = () => {
  return <Observer>{() => <Header />}</Observer>;
};

export default HeaderContainer;
