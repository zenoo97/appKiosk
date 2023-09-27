import {observable} from 'mobx';

const SeatStore = observable({
  isSelected: -1,
  useStatus: {
    emptySeat: [],
    notAvailable: [],
    reservationAvailable: [],
  },
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
        status: 'emptySeat', //
        useTime: '',
      },
      {
        station_num: '2',
        x_coordinate: '821',
        y_coordinate: '300',
        station_width: '110',
        station_height: '62',
        station_color: '#D9D9D9',
        status: 'emptySeat', // 예약불가
        useTime: '',
      },
      {
        station_num: '3',
        x_coordinate: '968',
        y_coordinate: '430',
        station_width: '110',
        station_height: '62',
        station_color: '#D9D9D9',
        status: 'reservationAvailable', // 예약가능
        useTime: '',
      },
      {
        station_num: '4',
        x_coordinate: '944',
        y_coordinate: '560',
        station_width: '110',
        station_height: '62',
        station_color: '#D9D9D9',
        status: 'emptySeat', // 사용중
        useTime: '',
      },
      {
        station_num: '5',
        x_coordinate: '756',
        y_coordinate: '453',
        station_width: '110',
        station_height: '62',
        station_color: '#D9D9D9',
        status: 'notAvailable', // 예약불가
        useTime: '',
      },
    ],
  },
  seatUpdate(seatStatus, seatNum, useTime) {
    this.useStatus[seatStatus].push({
      seatNum: seatNum,
    });
    this.seatDataList['station_info_list'][seatNum - 1].useTime = useTime;

    if (seatStatus === 'emptySeat') {
      this.seatDataList['station_info_list'][seatNum - 1].status =
        'reservationAvailable';
    } else if (seatStatus === 'available') {
      this.seatDataList['station_info_list'][seatNum - 1].status = 'emptySeat';
    }

    // console.log(JSON.stringify(this.seatDataList, null, 2));
  },
});

export default SeatStore;
