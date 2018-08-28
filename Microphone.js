<<<<<<< HEAD
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

=======
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

>>>>>>> fc85327fbd38396c1d3875de1331a8da26b0fb0c
