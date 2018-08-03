import React,{Component} from "react";
import {Text,StyleSheet,View,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';

export default class Actionbutton extends Component {

render()
{


return(

<ActionButton 
  size={80}
  buttonColor="#FF9900"
  onPress={() => { console.log("hi")}}
  offsetY={20}
  offsetX={20}

  />
  
  

)

}

}
