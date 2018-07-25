import React from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import Input from './components/Input';
import {MapView} from "expo";



export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Input />
      <MapView 
       style={styles.map}
       initialRegion={{
        latitude: 6.9173,
        longitude: 79.8484,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }}
       />
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
   
    alignItems: 'center',
    justifyContent: 'center',
  },

  map:{

    width:"100%",
    height:"100%"
  }

});
