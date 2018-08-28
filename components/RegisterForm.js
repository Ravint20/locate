import React,{Component} from 'react';
import {View,Text,Button,StyleSheet,TextInput} from 'react-native';
import {bindActionCreators} from "redux";
import * as Actions from "./action/index";


export default class RegisterForm extends Component {

    constructor(props) {
 
        super(props)
     
        this.state = {
     
          Name: '',
          Password:"",
          ConfirmPassword:""
        }
     
      }

   
     
      InsertDataToServer = () =>{
     
     
     const { Name }  = this.state ;
     const {Password} =this.state;
     
     
     
     
    fetch('API', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
     
        name:Name,
        password:Password,
     
        
     
      })
     
    }).then((response) => response.json())
          .then((responseJson) => {
     
    // Showing response message coming from server after inserting records.
            Alert.alert(responseJson);
     
          }).catch((error) => {
            console.error(error);
          });
     
           Actions.this.props.navigation.navigate("Login");
      }
render(){


    ruturn(

         <View style={styles.container}>

         <TextInput placeholder="Enter User Name"  onChangeText={Name => this.setState({Name})}
         underlineColorAndroid='transparent' />
         <TextInput placeholder="Enter Password"  onChangeText={Password => this.setState({Password})}
          underlineColorAndroid='transparent'/>

         <TextInput placeholder="Confirm Password" onChangeText={ConfirmPassword => this.setState({ConfirmPassword})}
          underlineColorAndroid='transparent' />
        
         <Button  style={styles.register} title="Register" onPress={this.InsertDataToServer}  />

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
    
    export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);