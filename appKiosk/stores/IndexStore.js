import headerStore from './HeaderStore';
import footerStore from './FooterStore';
import seatStore from './SeatStore';
import reservationListStore from './ReservationListStore';
const indexStore = () => ({
  headerStore,
  footerStore,
  seatStore,
  reservationListStore,
});

export default indexStore;
