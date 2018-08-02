import React from 'react';
import { StyleSheet, Text, View,TextInput,Platform} from 'react-native';
import Input from './components/Input';
import Map from './components/Map';
import Actionbutton from './components/Actionbutton';
import PickerSelect from './components/Picker';
import Container from './components/Container';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

       
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
   
    
  },
});
