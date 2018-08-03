import React,{Component} from "react";
import {Text,StyleSheet,View,TextInput,Picker,Modal,TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
 
export default class Thermometer extends Component {


render(){


    return(

    <View style={styles.thermo}>
       
        <TouchableOpacity onPress={() =>{console.log("this is temperature")}}>

       < Icon name='thermometer-3' size={50}   />
      
       </TouchableOpacity>  
    
    </View>

    )
}

}


const styles=StyleSheet.create({

    thermo:{
        
       justifyContent:"center",
       alignItems:"center"
    }

})

