import React, {Component} from 'react';
import Header from '../components/shared/Header';
import indexStore from '../stores/IndexStore';
import {Observer} from 'mobx-react';

const HeaderContainer = () => {
  const {headerStore} = indexStore();
  return <Observer>{() => <Header headerStore={headerStore} />}</Observer>;
};

export default HeaderContainer;
