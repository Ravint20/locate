import React,{Component} from "react";
import {Text,StyleSheet,View,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';
import AddItem from './AddItem';
import {createStackNavigator} from 'react-navigation';

  class Actionbutton extends Component {

  constructor(props){
super(props) 

  }

render()

{

const { navigate } = this.props.navigation;
 


return(

<ActionButton 
  size={80}
  buttonColor="#FF9900"
  onPress={ ()=> navigate("Add")}
   

  />
  
  

)

}

}

const  navigator = createStackNavigator({

  Action: { screen: ActionButton },
  Add: { screen: AddItem },
});
export default navigator;


