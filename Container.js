<<<<<<< HEAD
import React,{Component} from "react";
import {Text,StyleSheet,View,TextInput,Picker,Modal,Image,Dimensions,TouchableOpacity} from 'react-native';
import Thermometer from './Thermometer'; 
import Direction from './Direction';
import Actionbutton from './Actionbutton';
import {bindActionCreators} from "redux";
import * as Actions from "./action/index";

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

                <TouchableOpacity
      
           
    > 
      
    </TouchableOpacity>

     <Button style={styles.logout }title="LogOut" onPress={()=> this.props.navigation.navigate("Login")} />

   

    <Actionbutton /> 

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
 
        },

        logout:{

         position:absolute,
         bottom:0,
         left:10,
         width:"10%"

        }


    }) 


    function mapStateToProps(state, props) {
        return {
        //loading: state.getProjectsReducer.loading,
        //projects: state.getProjectsReducer.projects
        }
        }
        
        function mapDispatchToProps(dispatch) {
        return bindActionCreators(Actions, dispatch);
        }
        
        export default connect(mapStateToProps, mapDispatchToProps)(Container);
=======
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

                <TouchableOpacity
      
           
    > 
      
    </TouchableOpacity>

   

    <Actionbutton /> 

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
>>>>>>> fc85327fbd38396c1d3875de1331a8da26b0fb0c
