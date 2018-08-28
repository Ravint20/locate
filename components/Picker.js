import React,{Component} from "react";
<<<<<<< HEAD
import {Text,StyleSheet,View,TextInput,Picker,Modal,ScrollView,Button} from 'react-native';
=======
import {Text,StyleSheet,View,TextInput,Picker,Modal,ScrollView} from 'react-native';
>>>>>>> fc85327fbd38396c1d3875de1331a8da26b0fb0c
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
          
<<<<<<< HEAD
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
=======
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
>>>>>>> fc85327fbd38396c1d3875de1331a8da26b0fb0c
    render(){    
      
      const description =[]

      {

<<<<<<< HEAD
        this.state.dataSource.map((val,key) =>{

          description.push(<Picker.Item label={val.ID} key={key} value={val.ID}  onPress={}/>,<Button title="DELETE" onPress={() => this.delete}/>)
=======
        programmingLanguages.map((y,x) =>{

          description.push(<Picker.Item label={y.label} key={x} value={y.label} />)
>>>>>>> fc85327fbd38396c1d3875de1331a8da26b0fb0c

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