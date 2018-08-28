import React,{Component} from "react";
import {Text,StyleSheet,View,TextInput,Picker,Modal,Image,Dimensions,TouchableOpacity} from 'react-native';
import Thermometer from './Thermometer'; 
import Direction from './Direction';
import Actionbutton from './Actionbutton';

export default class Container extends Component {

    render()

    {
  
     return(

        <View style={styles.box}>
         <View style={styles.text}>
        <Text   style={{color:"black",fontSize:23}}> CRYSBRO </Text>
        </View>

        <Image style={styles.image} source={require("./image/crysbro.png")}/> 
       
 
        <View 
           style={{
           borderBottomColor: 'black', 
           borderBottomWidth: 1, 
           width:"100%" , 
           opacity:0.05  ,
           marginBottom:30 
            
           
                     
               }}
                />

                <TouchableOpacity> 
      
    </TouchableOpacity>

   

    

     <Thermometer
         
        style={styles.thermo}    
       
      />

    
        </View>                     
     )

    }
    }


    const styles = StyleSheet.create({

        box:
        { 
      
          
          flex:0.25,  
          width:"100%",
          backgroundColor:"#ffffff", 
          opacity:1,
           bottom:0,  
           position:"absolute"
        
      
        },
      
        thermo:{
      
            position:"absolute" ,
            
      
        },
      
        text:{ 
            flex:1,
         marginHorizontal:"30%", 
          marginTop:20,
          position:"absolute"
          
        }, 
      
        image:{
      
      borderRadius:10,
       width:70,
       height:75,
       left:15 ,
       marginTop:13    
      
        }
      

    }) 