<<<<<<< HEAD
import React,{Component} from "react";
import {Text,StyleSheet,View,TextInput} from 'react-native';
import DropdownMenu from 'react-native-dropdown-menu';

export default class DropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
          text: ''
        };
      }
      render() {
        var data = [["C", "Java", "JavaScript", "PHP"], ["Python", "Ruby"], ["Swift", "Objective-C"]];
        return (
          <View style={{flex: 1}}>
            <View style={{height: 64}} />
            <DropdownMenu
              style={{flex: 1}}
              bgColor={'white'}
              tintColor={'#666666'}
              activityTintColor={'green'}
              // arrowImg={}      
              // checkImage={}   
              // optionTextStyle={{color: '#333333'}}
              // titleStyle={{color: '#333333'}} 
              // maxHeight={300} 
              handler={(selection, row) => this.setState({text: data[selection][row]})}
              data={data}
            >
    
              <View style={{flex: 1}}>
                <Text>
                  {this.state.text} is the best language in the world
                </Text>
              </View>
    
            </DropdownMenu>
          </View>
        );
      }
      
    }
    
    

const styles=StyleSheet.create({

     dropdown:{
         flex:1,
     }


=======
import React,{Component} from "react";
import {Text,StyleSheet,View,TextInput} from 'react-native';
import DropdownMenu from 'react-native-dropdown-menu';

export default class DropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
          text: ''
        };
      }
      render() {
        var data = [["C", "Java", "JavaScript", "PHP"], ["Python", "Ruby"], ["Swift", "Objective-C"]];
        return (
          <View style={{flex: 1}}>
            <View style={{height: 64}} />
            <DropdownMenu
              style={{flex: 1}}
              bgColor={'white'}
              tintColor={'#666666'}
              activityTintColor={'green'}
              // arrowImg={}      
              // checkImage={}   
              // optionTextStyle={{color: '#333333'}}
              // titleStyle={{color: '#333333'}} 
              // maxHeight={300} 
              handler={(selection, row) => this.setState({text: data[selection][row]})}
              data={data}
            >
    
              <View style={{flex: 1}}>
                <Text>
                  {this.state.text} is the best language in the world
                </Text>
              </View>
    
            </DropdownMenu>
          </View>
        );
      }
      
    }
    
    

const styles=StyleSheet.create({

     dropdown:{
         flex:1,
     }


>>>>>>> fc85327fbd38396c1d3875de1331a8da26b0fb0c
})