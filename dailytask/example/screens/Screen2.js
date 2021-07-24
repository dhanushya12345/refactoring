import React from 'react';
import Colors from  '../app/color/config';
import {   StyleSheet,View,Text} from 'react-native';
const Screen2 = () => {
    return (
        <View style={styles.box1}>
                <View style={{ backgroundColor: Colors.box1,  width: 50 ,height: 50, }} />
                <View style={{ backgroundColor:Colors.box2,  width: 50, height: 50, }} />
                <Text style={styles.text}>I am black
                     <Text style={{ color: 'white' }}>and white</Text>
                </Text>
         </View>

    );
}

export default Screen2;

const styles = StyleSheet.create({
    box1: {
        flexDirection:'row',
        justifyContent:'space-between',
        padding: 20,
        width: 250,
       height: 250,
       backgroundColor:Colors.secondary,
       borderColor:Colors.bordercolor,
       borderWidth:10,
       borderRadius:50,
       flexWrap:'wrap',
       alignContent:'center',
       },
       text:{
        fontWeight: 'bold',
        fontSize: 20,
        textTransform:'capitalize',
        fontfamily: 'serif',
       
        
       }
     
      
})