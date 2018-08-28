import React,{Component} from "react";
import {Text,StyleSheet,View,TextInput,Picker,Modal,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import Icon from 'react-native-vector-icons/Entypo';
import * as Actions from "./action/index";
 
export default class CancelIcon extends Component {

    constructor(props){
     
        super(props)

        this.state={

         search:''

        }

    }

cancel(search){

  this.props.search.clear();  

}
 
render(){ 

   
    return(
 
    <View style={styles.cancel}>
       
       <TouchableOpacity onPress={(search) =>this.cancel(search)} >      

       < Icon reverse={true} name='cross'    size={30}  color="black"    />  
        
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
        opacity:0.5 
        
        
    }

})

