import React from 'react';
import { StyleSheet, Text, View,TextInput,Platform} from 'react-native';
import Input from './components/Input';
import Map from './components/Map';
import Actionbutton from './components/Actionbutton';
import PickerSelect from './components/Picker';
import Container from './components/Container';
import Thermometer from './components/Thermometer';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
           <PickerSelect />
           <Input />
       
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
   
    
  },
});

