<<<<<<< HEAD
import React,{Component} from "react";
import {Text,StyleSheet,View,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';
import AddItem from './AddItem';
import {createStackNavigator} from 'react-navigation';

   export default class Actionbutton extends Component {

  constructor(props){
super(props) 

  }

  
render()

{

  
 
  


return(

<ActionButton 
  size={80}
  buttonColor="#FF9900"
  onPress={()=> console.log("hi")}
   

  />
  
  

)

}

}



=======
import React,{Component} from "react";
import {Text,StyleSheet,View,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';
import AddItem from './AddItem';
import {createStackNavigator} from 'react-navigation';

   export default class Actionbutton extends Component {

  constructor(props){
super(props) 

  }

  
render()

{

  
 
  


return(

<ActionButton 
  size={80}
  buttonColor="#FF9900"
  onPress={()=> console.log("hi")}
   

  />
  
  

)

}

}



>>>>>>> fc85327fbd38396c1d3875de1331a8da26b0fb0c
