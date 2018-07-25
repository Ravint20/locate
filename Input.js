import React,{Component} from "react";
import {Text,StyleSheet,View,TextInput} from 'react-native';

export default class Input extends Component {
    render(){
     return(

<View style={styles.input}>
      <TextInput
        placeholder="search on google map" 
       />
</View>
         )
}}

const styles=StyleSheet.create({
input:{
    width:330,
    height:50,
    padding:10,
    backgroundColor:"white",
    opacity:0.7
  },
  
})