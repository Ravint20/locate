import React from 'react';
import { StyleSheet, Text, View,TextInput,Platform,StatusBar,KeyboardAvoidingView} from 'react-native';
import { Constants } from 'expo';

import Map from './components/Map';

import PickerSelect from './components/Picker';
import GooglePlacesInput from './components/GooglePlacesInput';
import Container from './components/Container';
import Input from './components/Input';
import CancelIcon from './components/CancelIcon';
import DirectionIcon from './components/DirectionIcon';
import {createStackNavigator} from 'react-navigation';
import Home from './components/Home';
import AddItem from './components/AddItem';



 export default  class App extends React.Component {

    constructor(props){

      super(props);

    }
  render() {
    
    return (  
      
      <KeyboardAvoidingView style={styles.container}
      
      behavior="padding">

        <StatusBar hidden={true} />
        
             
        <Navigator />
        

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

const Navigator =createStackNavigator({

  Home:{screen:Home,},
  AddItem:{screen:AddItem,}
},{
 headerMode:'none'
}

)

   
