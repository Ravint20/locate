import React,{Component} from "react";
import {Text,StyleSheet,View,TextInput,Picker,Modal,TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
 
export default class Thermometer extends Component {


render(){


    return(

    <View style={styles.thermo}>
       
       <TouchableOpacity onPress={() =>{console.log("this is temperature")}} >

       < Icon reverse={true} name='thermometer-3'    size={30}  color="red"   />  
        
       </TouchableOpacity>   
    
    </View>

    )
}

}


const styles=StyleSheet.create({

    thermo:{
        
       paddingTop:"12%",     
        alignItems:"center" 
    }

})

