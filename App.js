import React from 'react';
import { StyleSheet, Text, View,TextInput,Platform,StatusBar} from 'react-native';
import { Constants } from 'expo';

import Map from './components/Map';
import Actionbutton from './components/Actionbutton';
import PickerSelect from './components/Picker';
import GooglePlacesInput from './components/GooglePlacesInput';
import Container from './components/Container';
import Input from './components/Input';

export default class App extends React.Component {
  render() {
    
    return ( 
      
      <View style={styles.container}>
        <StatusBar hidden={true} />
        
        <Map />
        <PickerSelect />
        <Input /> 
       
        <Container />
        
        <Actionbutton /> 
        

     </View>
      
    )
  }
}

const styles = StyleSheet.create({

  container: {
   flex:1,
   justifyContent:"center",
          

  },

  

});
