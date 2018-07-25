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
    width:300,
    height:50,
    padding:10,
    backgroundColor:"white",
    marginTop:200,
    marginLeft:10,
    marginRight:10,
    borderStyle:"solid",
    opacity:0.7
  },
  
})
