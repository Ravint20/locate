import React,{Component} from 'react';
import {View,Text,TextInput,StyleSheet,Button,AppRegistry} from 'react-native';
import {createStackNavigator,TabNavigator} from 'react-navigation';
import Home from './Home';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import * as Actions from "./action/index";


  class AddItem extends Component{ 
    constructor(props){

     super(props);
   
    }

 render() {



    return(

       
        <View style={styles.textInput}>    

         <TextInput  placeholder="Enter A Truck Number"  />

         <Button title="ADD" onPress={() => console.log("hi")} /> 

         <Button title="CANCEL" onPress={() => console.log("hi")}/>



        </View>


         
    )




 }




}

const styles =StyleSheet.create({

textInput:{

    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#ffffff",
      width:"20%",
      height:"20%"




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
    
    export default connect(mapStateToProps, mapDispatchToProps)(AddItem);

 





  
