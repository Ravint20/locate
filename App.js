import React from 'react';
import { StyleSheet, Text, View,TextInput,Picker } from 'react-native';
import Input from './components/Input';
import {MapView} from "expo";


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
     
      <Picker>
  <Picker.Item label="Java" value="java" />
  <Picker.Item label="JavaScript" value="js" />
 
</Picker>



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
