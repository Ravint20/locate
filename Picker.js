import React,{Component} from "react";
import {Text,StyleSheet,View,TextInput,Picker,Modal} from 'react-native';
import Triangle from './Triangle';
const programmingLanguages = [
    {
      label: 'Java',
      value: 'java',
    },
    {
      label: 'JavaScript',
      value: 'js',
    }, 
    { 
      label: 'Python',
      value: 'python',
    },
    {
      label: 'Ruby',
      value: 'ruby',
    },
    {
      label: 'C#',
      value: 'csharp',
    },
    {
      label: 'C++',
      value: 'cpp',
    },
    {
      label: 'C',
      value: 'c',
    },
    {
      label: 'Go',
      value: 'go',
    }
  ];

export default class PickerSelect extends Component {

    constructor(props) {
        super(props);
        this.state = {
          
          language: 'hi',
        };
      }
    render(){
     
 return(

    <View style={styles.container}>
    <Picker  style={{padding:10,width:"100%",backgroundColor:"#434343"}} mode="dropdown"
      
      selectedValue={this.state.language}
      onValueChange={itemValue => this.setState({ language: itemValue })}>

        <Picker.Item color="#FF9900" label="SELECT CONTAINER" value="SELECT CONTAINER" /> 
       <Picker.Item color="#FF9900" label="Java" value="java" /> 
       <Picker.Item  color="#FF9900" label="JavaScript" value="js" />   
    
 </Picker> 

 <Triangle /> 

{/*
<Modal visible={true} transparent={true} style={{backgroundColor:"efefef"}} onRequestClose={() => console.log("hi")}></Modal>
*/}
  </View>

 )}}

 
 const styles=StyleSheet.create({
    container:{
       top:"0%",
       position:'absolute', 
       width:"100%",
       
    },
    picker:{

       
       
        height:20,
         width:"100%",
        padding:10          
          
         
    }
 }) 
