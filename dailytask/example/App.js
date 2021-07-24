// import { StatusBar } from "expo-status-bar";
// import React from "react";
// import { StyleSheet, SafeAreaView, View, Text } from "react-native";
// ;
//  import Propsicon from './screens/Props ';
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import style from './Styles';
// import AppText from './AppText';
// export default function App() {
//   return (

//     <SafeAreaView style={style.container}>

//       <View style={{backgroundColor:'green',width:300,height:300,alignItems:'center'}}>

//       <AppText  />
      


//       {/* <MaterialCommunityIcons name="rowing" size={150} color="yellow" />
//       <Propsicon Name='Dhanushya'  Aboutme='fullstack developer'> </Propsicon>
       
//        <View style={styles.box}>
//         <Text>say something</Text>
//         </View> */}

//         </View>

//       <StatusBar style="auto" />

//     </SafeAreaView>
//   );
// }


import React from 'react';
import { StyleSheet, SafeAreaView, Platform, Dimensions, ImageBackground } from 'react-native';
import AppText from './app/color/components/AppText';
import color from './app/color/config'


export default function App() {

   
  return (
    <SafeAreaView style={styles.container}>
      <AppText>welcome</AppText>
      {/* <AppText str='welcome'></AppText>  */}
  </SafeAreaView>
    );
  }
    
   
//styles for components
const styles = StyleSheet.create({
 container:{
   flex:1,
   backgroundColor:color.primary,
   alignItems:'center',
   justifyContent:'center',
   padding: Platform.OS==='android'?100:0
 } 
});
