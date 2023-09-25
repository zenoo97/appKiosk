import {observable} from 'mobx';

const FooterStore = observable({
  changeBtn: false,
  footerBtnStatus: false,

  onBtn() {
    this.changeBtn = true;
  },
  offBtn() {
    this.changeBtn = false;
  },
});
export default FooterStore;
