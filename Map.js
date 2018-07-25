import React,{Component} from 'react';
import {MapView} from "expo";
import {StyleSheet,View} from "react-native";
export default class Map extends Component{
    render(){
        return(
  <View >
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

map:{

    width:400,
    height:400
}

});

       