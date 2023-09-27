import {observable} from 'mobx';

const FooterStore = observable({
  // 타석 눌렀을 때 예약 버튼 활성화

  changeBtn: false,
  footerBtnStatus: false,

  onBtn() {
    this.changeBtn = true;
  },
  offBtn() {
    this.changeBtn = false;
  },

  // 예약 버튼
  reserveBtn: false,
  isSelectedSeat: -1,
  onReserveBtn() {
    this.reserveBtn = true;
  },
  offReserveBtn() {
    this.reserveBtn = false;
  },
});
export default FooterStore;
