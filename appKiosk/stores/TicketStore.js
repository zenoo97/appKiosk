import {observable} from 'mobx';

const TicketStore = observable({
  tickets: [
    {
      id: '15분',
      name: 900,
    },
    {
      id: '30분',
      name: 1800,
    },
    {
      id: '60분',
      name: 3600,
    },
  ],
});
export default TicketStore;
