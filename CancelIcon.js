import React,{Component} from "react";
import {Text,StyleSheet,View,TextInput,Picker,Modal,TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';
 
export default class CancelIcon extends Component {


render(){


    return(
 
    <View style={styles.cancel}>
       
       <TouchableOpacity onPress={() =>{console.log("this is temperature")}} >

       < Icon reverse={true} name='cross'    size={30}  color="black"   />  
        
       </TouchableOpacity>   
    
    </View>

    )
}

}


const styles=StyleSheet.create({

    cancel:{
        
          
        alignItems:"flex-end" ,    
        position:"absolute",
        right:60, 
        paddingTop:12,
        
        
    }

})

