import React from 'react';
import { StyleSheet, Text, View,TextInput} from 'react-native';
import Input from './components/Input';
import {MapView} from "expo";
import Actionbutton from './components/Actionbutton';
import PickerSelect from './components/Picker';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
     
    <View>
    <PickerSelect />
</View>   


<View style={styles.input}>
    <Input />

</View>
        
      <MapView 
       style={styles.map}
       initialRegion={{
        latitude: 6.9173,
        longitude: 79.8484,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }}
       />

       <Actionbutton />

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

  input:{

    marginTop:100
  },

  map:{

    width:"100%",
    height:"100%"
  }

});
