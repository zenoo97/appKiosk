import Footer from '../components/shared/Footer';
import React from 'react';
import indexStore from '../stores/IndexStore';
import {Observer} from 'mobx-react';
const FooterContainer = () => {
  const {footerStore} = indexStore();
  return <Observer>{() => <Footer footerStore={footerStore} />}</Observer>;
};
export default FooterContainer;
