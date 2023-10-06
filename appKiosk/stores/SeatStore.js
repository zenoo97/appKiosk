import {observable, toJS} from 'mobx';
import {produce} from 'immer';

// emptyseat : 빈타석
// reservationempty : 이용중인데 예약 가능한 경우
// notempty: 이용불가
// seatDataList: {
//     area_info: {
//       area_name: 'Area.svg',
//       area_width: '1440',
//       area_height: '1024',
//     },
//     station_info_list: [
//       {
//         station_num: '1',
//         x_coordinate: '674',
//         y_coordinate: '300',
//         station_width: '110',
//         station_height: '62',
//         station_color: '#D9D9D9',
//         status: 'emptySeat',
//         use_time: 0,
//       },
//       {
//         station_num: '2',
//         x_coordinate: '821',
//         y_coordinate: '300',
//         station_width: '110',
//         station_height: '62',
//         station_color: '#D9D9D9',
//         status: 'emptySeat',
//         use_time: 0,
//       },
//       {
//         station_num: '3',
//         x_coordinate: '968',
//         y_coordinate: '430',
//         station_width: '110',
//         station_height: '62',
//         station_color: '#D9D9D9',
//         status: 'emptySeat',
//         use_time: 0,
//       },
//       {
//         station_num: '4',
//         x_coordinate: '944',
//         y_coordinate: '560',
//         station_width: '110',
//         station_height: '62',
//         station_color: '#D9D9D9',
//         status: 'emptySeat',
//         use_time: 0,
//       },
//       {
//         station_num: '5',
//         x_coordinate: '756',
//         y_coordinate: '453',
//         station_width: '110',
//         station_height: '62',
//         station_color: '#D9D9D9',
//         status: 'notAvailable',
//         use_time: 0,
//       },
//     ],
//     useStatus: {
//       emptyseat: [],
//       reservationAvailable: [],
//       notAvailable: [],
//     },
const SeatStore = observable({
  seatDataList: {
    area_info: {
      key: 174745,
      area_name: '1234',
      svg_file_name: 'jgroup/174459/c9f42299-a78a-4df8-a08c-e183a86697f3',
      area_width: 547,
      area_height: 863,
      group_key: 174459,
    },
    station_info_list: [
      {
        key: 174747,
        station_name: 'station_2',
        x_coordinate: 378,
        y_coordinate: 114,
        station_width: 137,
        station_height: 102,
        station_color: '#D9D9D9',
        status: 'empty',
        mac_address: '',
        area_key: 174745,
        group_key: 174459,
        use_time: 0,
      },

      {
        key: 174748,
        station_name: 'station_3',
        x_coordinate: 159,
        y_coordinate: 249,
        station_width: 137,
        station_height: 102,
        station_color: '#D9D9D9',
        status: 'empty',
        mac_address: '',
        area_key: 174745,
        group_key: 174459,
        use_time: 0,
      },

      {
        key: 174749,
        station_name: 'station_4',
        x_coordinate: 378,
        y_coordinate: 381,
        station_width: 137,
        station_height: 102,
        station_color: '#D9D9D9',
        status: 'empty',
        mac_address: '',
        area_key: 174745,
        group_key: 174459,
        use_time: 0,
      },

      {
        key: 174750,
        station_name: 'station_5',
        x_coordinate: 47,
        y_coordinate: 401,
        station_width: 137,
        station_height: 102,
        station_color: '#D9D9D9',
        status: 'empty',
        mac_address: '',
        area_key: 174745,
        group_key: 174459,
        use_time: 0,
      },

      {
        key: 174751,
        station_name: 'station_6',
        x_coordinate: 228,
        y_coordinate: 444,
        station_width: 137,
        station_height: 102,
        station_color: '#D9D9D9',
        status: 'empty',
        mac_address: '',
        area_key: 174745,
        group_key: 174459,
        use_time: 0,
      },

      {
        key: 174752,
        station_name: 'station_7',
        x_coordinate: 47,
        y_coordinate: 553,
        station_width: 137,
        station_height: 102,
        station_color: '#D9D9D9',
        status: 'empty',
        mac_address: '',
        area_key: 174745,
        group_key: 174459,
        use_time: 0,
      },

      {
        key: 174753,
        station_name: 'station_8',
        x_coordinate: 338,
        y_coordinate: 603,
        station_width: 137,
        station_height: 102,
        station_color: '#D9D9D9',
        status: 'empty',
        mac_address: '',
        area_key: 174745,
        group_key: 174459,
        use_time: 0,
      },

      {
        key: 174754,
        station_name: 'station_9',
        x_coordinate: 47,
        y_coordinate: 705,
        station_width: 137,
        station_height: 102,
        station_color: '#D9D9D9',
        status: 'empty',
        mac_address: '',
        area_key: 174745,
        group_key: 174459,
        use_time: 0,
      },

      {
        key: 174755,
        station_name: 'station_10',
        x_coordinate: 241,
        y_coordinate: 705,
        station_width: 137,
        station_height: 102,
        station_color: '#D9D9D9',
        status: 'empty',
        mac_address: '',
        area_key: 174745,
        group_key: 174459,
        use_time: 0,
      },

      {
        key: 174746,
        station_name: 'station_6',
        x_coordinate: 47,
        y_coordinate: 97,
        station_width: 137,
        station_height: 102,
        station_color: '#D9D9D9',
        status: 'empty',
        mac_address: '1',
        area_key: 174745,
        group_key: 174459,
        use_time: 0,
      },
    ],
  },

  seatUpdate(seatStatus, key, use_time) {
    this.seatDataList['station_info_list'] = produce(
      toJS(this.seatDataList['station_info_list']),
      draft => {
        draft.forEach(data => {
          if (data.key === key) {
            data.use_time += use_time;
            data.status = 'used';
          }
        });
      },
      console.log(this.seatDataList['station_info_list']),
    );
    // console.log(this.seatDataList['station_info_list']);
  },

  seatDataSetting(seatData) {
    console.log(seatData);
    this.seatDataList['station_info_list'] = produce(
      toJS(this.seatDataList['station_info_list']),
      draft => {
        draft.forEach(data => {
          if (data.key === seatData.key) {
            data.status = 'empty';
            data.use_time = 0;
          }
        });
      },
    );
  },

  seatChange(seatData, use_time) {
    this.seatDataList = produce(toJS(this.seatDataList), draft => {
      draft.station_info_list[seatData.station_num - 1].use_time = 0;
      draft.station_info_list[seatData.station_num - 1].status = 'emptySeat';
    });
    console.log(this.seatDataList['station_info_list']);
  },
});

export default SeatStore;
