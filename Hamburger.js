import React,{Component} from "react";
import {Text,StyleSheet,View,TextInput,Picker,Modal,TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
 
export default class Hamburger extends Component {


render(){


    return(
 
    <View style={styles.hamburger}>
       
       <TouchableOpacity onPress={() =>{console.log("this is temperature")}} >

       < Icon reverse={true} name='hamburger'    size={30}  color="black"   />  
        
       </TouchableOpacity>   
    
    </View>

    )
}

}


const styles=StyleSheet.create({
   
    humburger:{
        
          
            
        alignItems:"flex-end" ,    
        position:"absolute",
        right:100,  
        paddingTop:12,
        
    }

})

