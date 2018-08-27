import React from 'react';
import { StyleSheet, Text, View,TextInput,Platform,StatusBar,KeyboardAvoidingView} from 'react-native';
import { Constants } from 'expo';

import Map from './components/Map';

import PickerSelect from './components/Picker';
import GooglePlacesInput from './components/GooglePlacesInput';
import Container from './components/Container';
import Input from './components/Input';
import CancelIcon from './components/CancelIcon';
import DirectionIcon from './components/DirectionIcon';
import {createStackNavigator} from 'react-navigation';
import Home from './components/Home';
import AddItem from './components/AddItem';
<<<<<<< HEAD
import {Provider} from 'react-redux';
import store from './components/Store';


  export default   class App extends React.Component {

    constructor(props){

      super(props);

=======



 export default  class App extends React.Component {

    constructor(props){

      super(props);

>>>>>>> 418e1f35d1051ccde1f7a24d99d5038d2e0d4254
    }
  render() {
    
    return (  
<<<<<<< HEAD
      
      <KeyboardAvoidingView style={styles.container}
      
      behavior="padding">

        <Provider store={store}>
          <Navigator />   
       </Provider>

=======
      
      <KeyboardAvoidingView style={styles.container}
      
      behavior="padding">

        <StatusBar hidden={true} />
        
             
        <Navigator />
>>>>>>> 418e1f35d1051ccde1f7a24d99d5038d2e0d4254
        

     </KeyboardAvoidingView>
      
    )
  }
}

const styles = StyleSheet.create({

  container: {
   flex:1,
   justifyContent:"center",
          

  },

<<<<<<< HEAD
         


=======
  
>>>>>>> 418e1f35d1051ccde1f7a24d99d5038d2e0d4254

});

const Navigator =createStackNavigator({

  Home:{screen:Home,},
<<<<<<< HEAD
  AddItem:{screen:AddItem},
},

{
 headerMode:'none',
},


)
     
         


      
=======
  AddItem:{screen:AddItem,}
},{
 headerMode:'none'
}

)

   
>>>>>>> 418e1f35d1051ccde1f7a24d99d5038d2e0d4254
