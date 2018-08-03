import React,{Component} from "react";
import {Text,StyleSheet,View,TextInput,Picker,Modal} from 'react-native';

export default class Container extends Component {

    render()

    {

     return(

        <View style={styles.box}>

        <Text fontSize={50} style={{color:"black"}}> CRYSBRO </Text>

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
          opacity:0.3
      
        }


    })
