import React from 'react';
import { StyleSheet, Text, View,TextInput,Platform,StatusBar,KeyboardAvoidingView,AppRegistry} from 'react-native';
import { Constants } from 'expo';

import Map from './Map';

import PickerSelect from './Picker';
import GooglePlacesInput from './GooglePlacesInput';
import Container from './Container';
import Input from './Input';
import CancelIcon from './CancelIcon';
import DirectionIcon from './DirectionIcon';
import {createStackNavigator,TabNavigator} from 'react-navigation';     
import ActionButton from './Actionbutton';


 export default class Home extends React.Component {
  
  render() {
  
    return (   
      
      <KeyboardAvoidingView style={styles.container}
      behavior="padding" >     
        <StatusBar hidden={true} />
        
        <Map />
        <PickerSelect />    
         
        <Input /> 
          
        
        <Container />
        
        <DirectionIcon />       
        
        

     </KeyboardAvoidingView>
      
    )
  }
}

 
const styles = StyleSheet.create({

  container: {
   flex:1,   
   justifyContent:"center",           
          

  },

  

});