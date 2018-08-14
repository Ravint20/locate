import React,{Component} from "react";
import {Text,StyleSheet,View,TextInput,Platform} from 'react-native';
import {SearchBar} from "react-native-elements";



export default class Input extends Component {
    render(){ 
     
 return(
 <View style={styles.container}>
 

  <SearchBar
     Platform="default"    
    style={styles.search}  
    placeholder="Search Google Map" 
    searchIcon={false}
    showLoading={true} 
    cancelIcon={{ type: 'font-awesome', name: 'chevron-left' }}
    justifyContent="center" 
    alignItems="center"
    width="100%"
    containerStyle={{backgroundColor: 'white', borderWidth: 1, borderRadius: 4}} 
    inputStyle={{backgroundColor: 'white',fontSize:15,paddingLeft:30} }  
   
    
 
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
  
     width:"90%",
      padding:10

  },
  search:{

   
    


  }
});
