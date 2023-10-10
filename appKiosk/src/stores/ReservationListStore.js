import {observable} from 'mobx';

const ReservationListStore = observable({
  reservationListStatus: false,
  onReservationList() {
    this.reservationListStatus = true;
    console.log('on reservation list');
  },
  offReservationList() {
    this.reservationListStatus = false;
    console.log('off reservation list');
  },
});
export default ReservationListStore;
