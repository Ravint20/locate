<<<<<<< HEAD
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
   
    hamburger:{
        
        left:10, 
        position:"absolute" ,
        paddingTop:12,
             
            
       
        
    }

})

=======
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
   
    hamburger:{
        
        left:10, 
        position:"absolute" ,
        paddingTop:12,
             
            
       
        
    }

})

>>>>>>> fc85327fbd38396c1d3875de1331a8da26b0fb0c
