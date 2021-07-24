import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {   StyleSheet, Text, TouchableOpacity, View, Image, Platform, SafeAreaView, Button, Alert} from 'react-native';
import {useDimensions, useDeviceOrientation} from "@react-native-community/hooks"

export default function App() {
  console.log(useDimensions())
  console.log(useDeviceOrientation());
const {landscape} = useDeviceOrientation()

  return (
    
    
<SafeAreaView style={[styles.container,]}>

<Button  title="click Here!"  onPress={openTwoButtonAlert} color="red"  />

     
       <View
        style={[
          styles.box,
          {
           
            top: 10,
            right: 75,
            position:'relative',
            backgroundColor: "powderblue",
            flexWrap:'wrap',
            alignContent:'stretch',
            alignSelf:'baseline'
          },
        ]}>

        <Image style={styles.logo} source={require('./assets/favicon.png')}  blurRadius={0} style={{alignSelf:'flex-start'}}></Image>
        <Text style={{alignSelf:'center',}} onPress={title}>Title</Text>
        </View>

      <View
        style={[
          styles.box,
          {
           
            top: 35,
            left: 10,
            position:'relative',
            backgroundColor: "skyblue",
            alignSelf:'center'
          },
        ]}>
          <TouchableOpacity onPress={()=>console.log('You have pressed the image ')}>
        <Image source={{height:150,width:landscape?150:150,uri:'https://i.picsum.photos/id/1062/5092/3395.jpg?hmac=o9m7qeU51uOLfXvepXcTrk2ZPiSBJEkiiOp-Qvxja-k'}}  style={{}} ></Image>
      </TouchableOpacity>

        </View>
      
      <View
        style={[
          styles.box,
          {
            
            top: 60,
            left: 75,
            position:'relative',
            backgroundColor: "steelblue",
            alignContent:'flex-end',
            alignSelf:'flex-end'
          },
        ]}>
           <Text  delayLongPress={2} onLongPress={longtext} style={styles.text}   >A dog is the only thing on earth that loves you more than you love yourself.
           Animals have come to mean so much in our lives</Text>

        </View>
      

      <StatusBar style="auto" />

    </SafeAreaView>
  
  );
}

function title() {
  console.log('You have pressed the title');
}

function longtext() {
  console.log('You have long pressed');
}

openTwoButtonAlert=()=>{
    Alert.alert(
      'EXIT!',
      'Are You sure you want to exit',
      [
        {text: 'Yes', onPress: () => console.log('You have clicked Yes button ')},
        {text: 'No', onPress: () => console.log('You have clicked No button '), style: 'cancel'},
      ],
      { 
        cancelable: true 
      }
    );
  }

const styles = StyleSheet.create({
  
  container:{
    flex:1,
    justifyContent: 'center',
    padding: Platform.OS==="android"?3:0,
    backgroundColor: 'silver',
    alignItems: 'center',
    //flexShrink:1,
    flexWrap:'wrap',
    alignContent:'stretch',
    
  },
  text:{
    alignContent:'center',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf:'flex-end'
  },
  box: {
     width: 50,
    height: 50,
  },
  logo:{
    alignSelf:'center',
    flexDirection:'row',
    height:100,
    width:100,
  }
  
});