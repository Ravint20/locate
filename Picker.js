import React,{Component} from "react";
import {Text,StyleSheet,View,TextInput,Picker,Modal} from 'react-native';

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
    <Picker  style={{width:"100%", top:20,height:60,backgroundColor:"black"}} mode="dropdown"
      
      selectedValue={this.state.language}
      onValueChange={itemValue => this.setState({ language: itemValue })}>
       <Picker.Item label="Java" value="java" />
     <Picker.Item label="JavaScript" value="js" />
      
 </Picker>
{/*
<Modal visible={true} transparent={true} style={{backgroundColor:"efefef"}} onRequestClose={() => console.log("hi")}></Modal>
*/}
  </View>

 )}}

 const styles=StyleSheet.create({
    container:{
      
    },

    picker:{
      flex:1,
        backgroundColor:"black",
        marginTop:200,
        height:20,
         width:"100%"

    }
 })
