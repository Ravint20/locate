import React,{Component} from "react";
import {Text,StyleSheet,View,TextInput,Platform} from 'react-native';
import {SearchBar} from "react-native-elements";



export default class Input extends Component {
    render(){
     
 return(
 <View style={styles.container}>
 
<View style={styles.input}>
  <SearchBar
    placeholder="search on google map" 
  />


</View>
</View>
        
 )
      
}

}


const styles = StyleSheet.create({
  container:{
  
  },
  input : {
     width:350,
      left:10,
      top:0,
      padding:15
  }
  
});
