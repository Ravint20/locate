import React,{Component} from "react";
import {Text,StyleSheet,View,TextInput,Picker,Modal,TouchableOpacity,Dimensions} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
 
export default class DirectionIcon extends Component {


render(){


    return(
 
        <View  style={styles. directionIcon}>
      
 
       <TouchableOpacity onPress={() =>{console.log("this is temperature")}} 
       style = {{
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 4,
        width: Dimensions.get('window').width * 0.20,
        height: Dimensions.get('window').width * 0.20,
        backgroundColor:'#4286F5',
        justifyContent: 'center',  
        alignItems: 'center',
       
        left:"42%",
        bottom:0 ,
        position:"absolute",
        borderColor:"#434343",
        borderWidth:0.5  
      }}         
      underlayColor = '#ccc' >      




      
   

       < Icon reverse={true} name='directions'    size={35}  color="#ffffff"   />  
         
       </TouchableOpacity>    
      
     
    </View>
   
    )  
}

}


const styles=StyleSheet.create({
   
    directionIcon:{
        
        
       position:'absolute',
        right:'25%', 
         bottom:'19%' 
         
    }

})

