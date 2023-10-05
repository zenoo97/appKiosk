import {observable, toJS} from 'mobx';
import {produce} from 'immer';

// emptyseat : 빈타석
// reservationAvailable : 이용중인데 예약 가능한 경우
// notAvailable: 이용불가
const SeatStore = observable({
  seatDataList: {
    area_info: {
      area_name: 'Area.svg',
      area_width: '1440',
      area_height: '1024',
    },
    station_info_list: [
      {
        station_num: '1',
        x_coordinate: '674',
        y_coordinate: '300',
        station_width: '110',
        station_height: '62',
        station_color: '#D9D9D9',
        status: 'emptySeat',
        useTime: 0,
      },
      {
        station_num: '2',
        x_coordinate: '821',
        y_coordinate: '300',
        station_width: '110',
        station_height: '62',
        station_color: '#D9D9D9',
        status: 'emptySeat',
        useTime: 0,
      },
      {
        station_num: '3',
        x_coordinate: '968',
        y_coordinate: '430',
        station_width: '110',
        station_height: '62',
        station_color: '#D9D9D9',
        status: 'emptySeat',
        useTime: 0,
      },
      {
        station_num: '4',
        x_coordinate: '944',
        y_coordinate: '560',
        station_width: '110',
        station_height: '62',
        station_color: '#D9D9D9',
        status: 'emptySeat',
        useTime: 0,
      },
      {
        station_num: '5',
        x_coordinate: '756',
        y_coordinate: '453',
        station_width: '110',
        station_height: '62',
        station_color: '#D9D9D9',
        status: 'notAvailable',
        useTime: 0,
      },
    ],
    useStatus: {
      emptyseat: [],
      reservationAvailable: [],
      notAvailable: [],
    },
  },

  seatUpdate(seatStatus, seatNum, useTime) {
    this.seatDataList = produce(toJS(this.seatDataList), draft => {
      draft.station_info_list[seatNum - 1].useTime += useTime;

      if (seatStatus === 'emptySeat') {
        draft.station_info_list[seatNum - 1].status = 'reservationAvailable';
        draft.useStatus['reservationAvailable'].push({seatNum, useTime});
      } else if (seatStatus === 'reservationAvailable') {
        draft.useStatus['reservationAvailable'].push({seatNum, useTime});
      }
      console.log(draft.useStatus);
    });
    // console.log(this.seatDataList['station_info_list']);
  },

  timeMinus(seatData, seatNum) {
    this.seatDataList = produce(toJS(this.seatDataList), draft => {
      draft.station_info_list[seatNum - 1].useTime -= 1;
      if (draft.station_info_list[seatNum - 1].useTime === 0) {
        draft.station_info_list[seatData.station_num - 1].useTime = 0;
        draft.station_info_list[seatData.station_num - 1].status = 'emptySeat';
      }
    });
  },

  seatChange(seatData, useTime) {
    this.seatDataList = produce(toJS(this.seatDataList), draft => {
      draft.station_info_list[seatData.station_num - 1].useTime = 0;
      draft.station_info_list[seatData.station_num - 1].status = 'emptySeat';
    });
    console.log(this.seatDataList['station_info_list']);
  },
});

export default SeatStore;
