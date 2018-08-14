import React,{Component} from "react";
import {Text,StyleSheet,View,TextInput,Picker,Modal,TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
 
export default class Microphone extends Component {


render(){


    return(
 
    <View style={styles.microphone}>
       
       <TouchableOpacity onPress={() =>{console.log("this is temperature")}} >

       < Icon reverse={true} name='microphone'    size={30}  color="black"   />  
        
       </TouchableOpacity>   
    
    </View>

    )
}

}


const styles=StyleSheet.create({

    microphone:{
        
          
        alignItems:"flex-end" ,    
        position:"absolute",
        right:15, 
        paddingTop:12,
        
        
    }

})

