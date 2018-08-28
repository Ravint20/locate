<<<<<<< HEAD
import React,{Component} from 'react';
import { StyleSheet,Image, Text, View,TextInput,Platform,StatusBar,KeyboardAvoidingView,AppRegistry,TouchableOpacity,Button} from 'react-native';
import { Constants } from 'expo';

import Map from './Map';

import PickerSelect from './Picker';
import GooglePlacesInput from './GooglePlacesInput';
import Container from './Container';
import Input from './Input';
import CancelIcon from './CancelIcon';
import DirectionIcon from './DirectionIcon';
import {createStackNavigator,TabNavigator} from 'react-navigation';     
import Actionbutton from './Actionbutton';
import AddItem from './AddItem';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import * as Actions from "./action/index";
import Thermometer from './Thermometer'; 
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button'; 

  class Home extends Component {
  constructor(props){

    super(props);

   }
   
  render() {
  
    return (   
      
      <KeyboardAvoidingView style={styles.container}
      behavior="padding" >     
        <StatusBar hidden={true} />
        
        <Map />
        <PickerSelect />        
          
        <Container />

        <ActionButton 
        size={80}
        buttonColor="#FF9900"
        onPress={()=> this.props.navigation.navigate('AddItem')} />
        
        
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

function mapStateToProps(state, props) {
  return {
  //loading: state.getProjectsReducer.loading,
  //projects: state.getProjectsReducer.projects
  }
  }
  
  function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home);

  
=======
import React,{Component} from 'react';
import { StyleSheet,Image, Text, View,TextInput,Platform,StatusBar,KeyboardAvoidingView,AppRegistry,TouchableOpacity,Button} from 'react-native';
import { Constants } from 'expo';

import Map from './Map';

import PickerSelect from './Picker';
import GooglePlacesInput from './GooglePlacesInput';
import Container from './Container';
import Input from './Input';
import CancelIcon from './CancelIcon';
import DirectionIcon from './DirectionIcon';
import {createStackNavigator,TabNavigator} from 'react-navigation';     
import Actionbutton from './Actionbutton';
import AddItem from './AddItem';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import * as Actions from "./action/index";
import Thermometer from './Thermometer'; 
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button'; 

  class Home extends Component {
  constructor(props){

    super(props);

   }
   
  render() {
  
    return (   
      
      <KeyboardAvoidingView style={styles.container}
      behavior="padding" >     
        <StatusBar hidden={true} />
        
        <Map />
        <PickerSelect />        
          
        <Container />

        <ActionButton 
        size={80}
        buttonColor="#FF9900"
        onPress={()=> this.props.navigation.navigate('AddItem')} />
        
        
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

function mapStateToProps(state, props) {
  return {
  //loading: state.getProjectsReducer.loading,
  //projects: state.getProjectsReducer.projects
  }
  }
  
  function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home);

  
>>>>>>> fc85327fbd38396c1d3875de1331a8da26b0fb0c
