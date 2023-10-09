import headerStore from './HeaderStore';
import footerStore from './FooterStore';
import seatStore from './SeatStore';
import ticketStore from './TicketStore';
import userStore from './UserStore';
const indexStore = () => ({
  headerStore,
  footerStore,
  seatStore,
  ticketStore,
  userStore,
});

export default indexStore;
