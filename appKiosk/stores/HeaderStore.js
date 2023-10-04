import {observable} from 'mobx';

const HeaderStore = observable({
  headerTitle: '', // 추후 api 연동 후 센터 명을 가져옴  -> 센터명 없을 시에는 '브로제이 골프'가 default
  titleModalStatus: false,
  onTitleModal() {
    this.titleModalStatus = true;
    console.log('open title modal');
  },
  offTitleModal() {
    this.titleModalStatus = false;
    console.log('off title modal');
  },
});
export default HeaderStore;
