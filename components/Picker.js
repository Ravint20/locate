import React,{Component} from "react";
import {Text,StyleSheet,View,TextInput,Picker,Modal,ScrollView,Button} from 'react-native';
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
          
          isLoading:true,
          dataSource:null
        
        };
      }
    
      componentDidMount(){

       return fetch("API")
       .then((response) => response.json())
        .then((responseJson) => {

         this.setState({

           isLoading:false,
           dataSource:responseJson.data,


         })


        } )

        .catch((error) => {
         console.log(error);

        })

      }

       deleteData(item, url) {
        return fetch(url + '/' + item, {
          method: 'delete'
        })
        .then(response => response.json());
      }
    render(){    
      
      const description =[]

      {

        this.state.dataSource.map((val,key) =>{

          description.push(<Picker.Item label={val.ID} key={key} value={val.ID}  onPress={}/>,<Button title="DELETE" onPress={() => this.delete}/>)

        })

      }
        
 return(

    <View style={styles.container}> 

    
        
    <Picker  style={{padding:20,width:"100%",backgroundColor:"#434343"}} itemStyle={{paddingHorizontal:20,textAlign:"center"}} mode="dropdown"  
      
      selectedValue={this.state.language}
      onValueChange={() => this.onValueChange2}>
        
      <ScrollView> {description} </ScrollView>   

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