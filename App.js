import React from 'react';
import { StyleSheet, Text, View,TextInput,Platform} from 'react-native';
import { Constants } from 'expo';
import Map from './components/Map';

import Actionbutton from './components/Actionbutton';
import PickerSelect from './components/Picker';
import GooglePlacesInput from './components/GooglePlacesInput';
import Container from './components/Container';
import Thermometer from './components/Thermometer';

export default class App extends React.Component {
  render() {
    return (
      
      <View style={styles.container}>
        <View style={styles.statusBar} />
        <PickerSelect /> 
        <GooglePlacesInput />
         <Map />
         
         <Container />
        <Actionbutton />
        <Thermometer />

     </View>
      
    )
  }
}

const styles = StyleSheet.create({

  container: {
   flex:1,
   justifyContent:"center",
   flexDirection:"column"

  },

  statusBar: {
    backgroundColor: "#292929",
    height: Constants.statusBarHeight,
  },

});
