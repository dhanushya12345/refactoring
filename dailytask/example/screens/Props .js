import React from 'react';
import {  StyleSheet ,Image,View,SafeAreaView, Text} from 'react-native';


const Propsicon = (props)=>{
    return(

        
        <View style={{justifyContent:'center',alignItems:'center',}}>
           {props.Children}
        <Text>My name is {props.Name}  </Text>
        <Text> I am a  {props.Aboutme} </Text>
        
        
        </View>
    );
}

// const styles = StyleSheet.create({
// orange:{
//     backgroundColor:'g',
//     alignItems:'center',
//     justifyContent:'center',
//     height:100,
//     width:100

// }
// })


export default Propsicon