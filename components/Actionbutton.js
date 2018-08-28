import React,{Component} from "react";
import {Text,StyleSheet,View,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';
import AddItem from './AddItem';
import Home from './Home';

import {createStackNavigator,TabNavigator} from 'react-navigation';

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
  onPress={()=> this.props.navigation.navigate('AddItem')} 
    

  />
  
  

)

}

} 


