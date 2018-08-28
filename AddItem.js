<<<<<<< HEAD
import React,{Component} from 'react';
import {View,Text,TextInput,StyleSheet,Button,AppRegistry} from 'react-native';
import {createStackNavigator,TabNavigator} from 'react-navigation';
import Home from './Home';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import * as Actions from "./action/index";


  class AddItem extends Component{ 
    constructor(props) {
 
        super(props)
     
        this.state = {
     
          ID: '',
          password:"",
          
        }
     
      }

      cancell(){
      
         this.setState({


             ID="",
             password:""

         })


      }
     
      InsertDataToServer = () =>{
     
     
     const { ID }  = this.state ;
     const {password} =this.state;
     
     
     
     
    fetch('API', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
     
        ID:ID,
        password:password,
     
        
     
      })
     
    }).then((response) => response.json())
          .then((responseJson) => {
     
    // Showing response message coming from server after inserting records.
            Alert.alert(responseJson);
     
          }).catch((error) => {
            console.error(error);
          });
     
     
      }

 render() {



    return(

       
        <View style={styles.container}>

        <Text style={styles.id1}>ID: </Text>    
         <View style={styles.id} >
         
         <TextInput style={styles.textInput}  underlineColorAndroid='transparent' placeholder="Enter A Truck Number"   onChangeText={ID => this.setState({ID})}
  />

         </View>

          <Text style={styles.password1}>PASSWORD: </Text>
          <View style={styles.password}>
         
         <TextInput placeholder="Enter a password" secureTextEntry={true} underlineColorAndroid='transparent'  onChangeText={password => this.setState({password})} />
         </View>
          
          <View  style={{flexDirection:"row",paddingHorizontal:"15%"}}>



         <View style={styles.addbutton}>
         
         <Button    title="ADD" onPress={this.InsertDataToServer} /> 
          </View>

          <View style={styles.cancelbutton}>
         <Button  style={styles.button} title="CANCEL" onPress={() => this.cancell}/>
         
         </View>  
         



         </View>



        </View>


         
    )




 }




}

const styles =StyleSheet.create({

container:{

    justifyContent:"center",
    backgroundColor:"#ffffff",
      width:"100%",
      height:"50%"




},
id1:{

    left:"15%"    

},

id:{
   
    borderWidth:2,
    width:"75%",
    left:"15%",
    marginTop:"2%",
    paddingHorizontal:"5%"
},

password1:{

    left:"15%",
    marginTop:"5%"  

},
password:{
       
    borderWidth:2,
    width:"75%",
    left:"15%",
    marginTop:"2%",
    paddingHorizontal:"5%"

},
   

addbutton:{
  width:"50%",
 
  marginTop:"6%",
 borderRadius:5
},


cancelbutton:{
    width:"50%", 
   
    marginTop:"6%",
     marginHorizontal:"7%"  
        
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

 





  
=======
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

       
        <View style={styles.container}>

        <Text style={styles.id1}>ID: </Text>    
         <View style={styles.id} >
         
         <TextInput style={styles.textInput}  underlineColorAndroid='transparent' placeholder="Enter A Truck Number"  />

         </View>

          <Text style={styles.password1}>PASSWORD: </Text>
          <View style={styles.password}>
         
         <TextInput placeholder="Enter a password" secureTextEntry={true} underlineColorAndroid='transparent' />
         </View>
          
          <View  style={{flexDirection:"row",paddingHorizontal:"15%"}}>



         <View style={styles.addbutton}>
         
         <Button    title="ADD" onPress={() => console.log("hi")} /> 
          </View>

          <View style={styles.cancelbutton}>
         <Button  style={styles.button} title="CANCEL" onPress={() => console.log("hi")}/>
         
         </View>  
         



         </View>



        </View>


         
    )




 }




}

const styles =StyleSheet.create({

container:{

    justifyContent:"center",
    backgroundColor:"#ffffff",
      width:"100%",
      height:"50%"




},
id1:{

    left:"15%"    

},

id:{
   
    borderWidth:2,
    width:"75%",
    left:"15%",
    marginTop:"2%",
    paddingHorizontal:"5%"
},

password1:{

    left:"15%",
    marginTop:"5%"  

},
password:{
       
    borderWidth:2,
    width:"75%",
    left:"15%",
    marginTop:"2%",
    paddingHorizontal:"5%"

},
   

addbutton:{
  width:"50%",
 
  marginTop:"6%",
 borderRadius:5
},


cancelbutton:{
    width:"50%", 
   
    marginTop:"6%",
     marginHorizontal:"7%"  
        
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

 





  
>>>>>>> fc85327fbd38396c1d3875de1331a8da26b0fb0c
