import {observable} from 'mobx';

const TicketStore = observable({
  tickets: [
    {
      id: '15초',
      name: 15,
    },
    {
      id: '30초',
      name: 30,
    },
    {
      id: '60초',
      name: 60,
    },
  ],
});
export default TicketStore;
