<<<<<<< HEAD
import React,{Component} from "react";
import {Text,StyleSheet,View,TextInput,Platform} from 'react-native';
import {SearchBar} from "react-native-elements";
import CancelIcon from './CancelIcon';
import Microphone from './Microphone';
import Hamburger from './Hamburger';


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
    inputStyle={{backgroundColor: 'white',fontSize:20,paddingLeft:40} }  
          
    
 
  />

  
  <Hamburger /> 
  <CancelIcon />
 
  <Microphone />
  



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
=======
import React,{Component} from "react";
import {Text,StyleSheet,View,TextInput,Platform} from 'react-native';
import {SearchBar} from "react-native-elements";
import CancelIcon from './CancelIcon';
import Microphone from './Microphone';
import Hamburger from './Hamburger';


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
    inputStyle={{backgroundColor: 'white',fontSize:20,paddingLeft:40} }  
          
    
 
  />

  
  <Hamburger /> 
  <CancelIcon />
 
  <Microphone />
  



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
>>>>>>> fc85327fbd38396c1d3875de1331a8da26b0fb0c
