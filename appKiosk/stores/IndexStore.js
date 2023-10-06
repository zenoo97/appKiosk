import headerStore from './HeaderStore';
import footerStore from './FooterStore';
import seatStore from './SeatStore';
import ticketStore from './TicketStore';
const indexStore = () => ({
  headerStore,
  footerStore,
  seatStore,
  ticketStore,
});

export default indexStore;
