import {observable} from 'mobx';

const FooterStore = observable({
  // 타석 눌렀을 때 예약 버튼 활성화
  changeBtn: false,
  footerBtnStatus: false,

  closeTe: -1,

  onBtn() {
    this.changeBtn = true;
  },
  offBtn() {
    this.changeBtn = false;
  },

  // 예약 버튼
  reserveBtn: false,

  onReserveBtn() {
    this.reserveBtn = true;
    this.closeTe = -1;
  },
  offReserveBtn() {
    this.reserveBtn = false;
  },
});
export default FooterStore;
