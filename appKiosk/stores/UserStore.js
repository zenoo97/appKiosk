// import {observable} from 'mobx';
// import {useState} from 'react';
// import {View, Text} from 'react-native';

// const UserData = observable(() => {
//   const [userData, setUserData] = useState([]);
//   const getApi = () => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(response => response.json())
//       .then(data => setUserData(data));
//   };
//   useEffect(() => {
//     getApi();
//   }, []);
//   console.log(userData);
//   return (
//     <Observer>
//       {() => {
//         <View>
//           <Text></Text>
//         </View>;
//       }}
//     </Observer>
//   );
// });

// export default UserData;
