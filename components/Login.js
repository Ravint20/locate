import React,{Component} from 'react';
import {View,Text,Button,StyleSheet,TextInput} from 'react-native';
import {bindActionCreators} from "redux";
import * as Actions from "./action/index";


export default class Login extends Component {

    


render(){


    ruturn(

         <View style={styles.container}>

         <TextInput placeholder="Enter Name" />
         <TextInput placeholder="Enter Password" />
         <Button title="Login" onPress={()=> this.props.navigation.navigate("Home")} />
         <Button  style={styles.register} title="Register" onPress={()=> this.props.navigation.navigate("Register")} />

         </View>


    )


}


}

const styles=StyleSheet.create({

       container:{

        justifyContent:"center",
        alignItems:"center"
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
    
    export default connect(mapStateToProps, mapDispatchToProps)(Login);