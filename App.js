import React from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import Input from './components/Input';
import Map from "./components/Map";


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       <View><Input /></View>
       <View><Map /></View>
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
