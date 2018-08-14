import React,{Component} from "react";
import {Text,StyleSheet,View,TextInput,Picker,Modal,Image,Dimensions,TouchableOpacity} from 'react-native';
import Thermometer from './Thermometer'; 
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
           opacity:0.1  ,
                    
               }}
                />

                <TouchableOpacity
      style = {{
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 4,
        width: Dimensions.get('window').width * 0.15,
        height: Dimensions.get('window').width * 0.15,
        backgroundColor:'#434343',
        justifyContent: 'center',  
        alignItems: 'center',
        opacity:0.2,
        left:"42%" 
      }}
      underlayColor = '#ccc'
      onPress = { () => alert('Yaay!') }
    > 
      
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

            position:"relative"

        },

        text:{ 
            flex:1,
         marginHorizontal:"30%", 
          marginTop:40,
          position:"absolute"
        }, 

        image:{
 
      borderRadius:10,
       width:70,
       height:75,
       left:10 ,
       marginTop:13    
 
        }


    }) 
