import React,{Component} from "react";
import {Text,StyleSheet,View,TextInput,Picker,Modal} from 'react-native';
import Thermometer from './Thermometer'; 
export default class Container extends Component {

    render()

    {

     return(

        <View style={styles.box}>

        <Text fontSize={100}  style={{color:"black"}}> CRYSBRO </Text>

        <Thermometer
        
          style={styles.thermo}    
         
        />
        </View>
     )

    }
    }


    const styles = StyleSheet.create({

        box:
        { 

          
          flex:0.25, 
          width:"100%",
          backgroundColor:"#ffffff", 
          opacity:1,
           bottom:0,
           position:"absolute"
      
        },

        thermo:{

            position:"relative"

        }


    }) 
