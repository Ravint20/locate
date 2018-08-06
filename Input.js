import React,{Component} from "react";
import {Text,StyleSheet,View,TextInput,Platform} from 'react-native';
import {SearchBar} from "react-native-elements";



export default class Input extends Component {
    render(){
     
 return(
 <View style={styles.container}>
 

  <SearchBar

    
    placeholder="search on google map" 
    searchIcon={false}
    showLoading
    platform="android"
    cancelIcon={{ type: 'font-awesome', name: 'chevron-left' }}
    justifyContent="center"
    alignItems="center"
    
    containerStyle={{ display:""}}

  />



</View>
        
 )
      
}


}


const styles = StyleSheet.create({
  container:{
  
  },
  input : {
  
     width:350,
      
      top:0,
      padding:10

  }
  
});
