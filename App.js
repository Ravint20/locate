import React from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import {MapView} from "expo";


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

      <TextInput
       placeholder="search" 
      />
      <View style={{top:10}}>
       <MapView 
      
        style={{ alignSelf: 'stretch', height: 500, width:400 }}

    
      
      initialRegion={{
        latitude: 6.9173,
        longitude: 79.8484,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }}
       />
       </View>

       </View>
      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
