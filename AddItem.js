import React,{Component} from 'react';
import {View,Text,TextInput,StyleSheet} from 'react-native';


export default class AddItem extends Component{

 rende() {



    return(

       
        <View style={styles.textInput}>

         <TextInput  placeholder="Enter A Truck Number"  />



        </View>


         
    )




 }




}

const style =StyleSheet.create({

textInput:{

    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#ffffff",
      width:"20%",
      height:"20%"




}



})