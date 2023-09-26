import {observable, action} from 'mobx';

class SubscribeStore {
  @observable
  _subscribe = [
    {
      id: '30분',
    },
    {
      id: '60분',
    },
    {
      id: '120분',
    },
  ];
}

export default new SubscribeStore();
