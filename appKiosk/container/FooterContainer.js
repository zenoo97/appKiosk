import Footer from '../components/Footer';
import React from 'react';
import indexStore from '../stores/IndexStore';
const FooterContainer = () => {
  const {footerStore} = indexStore();
  return <Footer footerStore={footerStore} />;
};
export default FooterContainer;
