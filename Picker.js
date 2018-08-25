import React,{Component} from "react";
import {Text,StyleSheet,View,TextInput,Picker,Modal,ScrollView} from 'react-native';
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
          
          language: '',
          labelName:" ",
        
        };
      }

      onValueChange2(value,label){
      

        this.setState(
          {
         language:value,
         labelName:label

          }
        )


      }
    render(){    
      
      const description =[]

      {

        programmingLanguages.map((y,x) =>{

          description.push(<Picker.Item label={y.label} key={x} value={y.label} />)

        })

      }
        
 return(

    <ScrollView style={styles.container}> 

    
        
    <Picker  style={{padding:20,width:"100%",backgroundColor:"#434343"}} itemStyle={{paddingHorizontal:20,textAlign:"center"}} mode="dropdown"  
      
      selectedValue={this.state.language}
      onValueChange={() => this.onValueChange2}>
        
       {description} 

       </Picker> 
       
          
         
 
             
 <Triangle />    

{/*
<Modal visible={true} transparent={true} style={{backgroundColor:"efefef"}} onRequestClose={() => console.log("hi")}></Modal>
*/}
  </ScrollView>       
 
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
