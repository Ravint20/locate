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
    inputContainerStyle={ backgroundColor="#fff"}
  
    
    

  />



</View>
        
 )
      
}


}


const styles = StyleSheet.create({
  container:{
  position:"absolute",
   top:"7%", 
  width:"100%",
  
 
  },
  input : {
  
     width:"100%",
      padding:10

  }
  
});
