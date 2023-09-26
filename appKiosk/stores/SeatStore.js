import {observable} from 'mobx';

const SeatStore = () =>
  observable({
    isSelected: -1,
  });

export default SeatStore;
