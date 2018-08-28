<<<<<<< HEAD
import React,{Component} from 'react';
import { Constants } from 'expo';
import { View,SafeAreaView,ScrollView,StyleSheet} from 'react-native';
import {
  GooglePlacesAutocomplete,
} from 'react-native-google-places-autocomplete'; // 1.2.12



 

export default class GooglePlacesInput extends Component{
  render() {

    return (  
      <ScrollView contentContainerStyle={{flexGrow : 1, justifyContent : 'center'}}>
      <View style={styles.container}> 
  
         <GooglePlacesAutocomplete
         
      placeholder='Search on google map'
      minLength={2} // minimum length of text to search
      autoFocus={false}
      returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
      listViewDisplayed='auto'    // true/false/undefined
      fetchDetails={true}
      renderDescription={row => row.description} // custom description render
      onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
       
      getDefaultValue={() => ''}  
      
      query={{ 
        // available options: https://developers.google.com/places/web-service/autocomplete
        key: 'AIzaSyC2QhtACfVZ2cr9HVvxQuzxd3HT36NNK3Q',
        language: 'en', // language of the results
        types: '(cities)' // default: 'geocode'
      }}
      
      
      styles={{


        textInputContainer: { 
          width: '100%' , 
          overflow: 'visible',
          flexGrow: 1,
          display: 'flex', 
          backgroundColor:"#fff", 
          borderTopWidth: 0,
          borderBottomWidth: 0,
          height: 50,
          overflow: 'visible',
          flexShrink:1
        
        }, 

        listView: {
          position: 'absolute',
          marginTop: 40,
          backgroundColor: 'green',
         
          zIndex: 16,
      
           
      },
 
        textinput:{  
          backgroundColor: 'transparent',
           height: 50,
          
        },
        description: { 
          fontWeight: 'bold'
        },
        predefinedPlacesDescription: {
          color: '#1faadb' 
        }
      }}
      
      currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
      currentLocationLabel="Current location"
      nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
      GoogleReverseGeocodingQuery={{
        // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
      }}
      GooglePlacesSearchQuery={{
        // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
        rankby: 'distance',
        types: 'food'
      }}
 
      filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
     
  
      debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
     
    />
    

     
      </View>
      </ScrollView >
    );
  }
}

const styles = StyleSheet.create({
  container: {
      width:"100%",
      position: 'absolute',
      top: 0
      
  } 

  })

=======
import React,{Component} from 'react';
import { Constants } from 'expo';
import { View,SafeAreaView,ScrollView,StyleSheet} from 'react-native';
import {
  GooglePlacesAutocomplete,
} from 'react-native-google-places-autocomplete'; // 1.2.12



 

export default class GooglePlacesInput extends Component{
  render() {

    return (  
      <ScrollView contentContainerStyle={{flexGrow : 1, justifyContent : 'center'}}>
      <View style={styles.container}> 
  
         <GooglePlacesAutocomplete
         
      placeholder='Search on google map'
      minLength={2} // minimum length of text to search
      autoFocus={false}
      returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
      listViewDisplayed='auto'    // true/false/undefined
      fetchDetails={true}
      renderDescription={row => row.description} // custom description render
      onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
       
      getDefaultValue={() => ''}  
      
      query={{ 
        // available options: https://developers.google.com/places/web-service/autocomplete
        key: 'AIzaSyC2QhtACfVZ2cr9HVvxQuzxd3HT36NNK3Q',
        language: 'en', // language of the results
        types: '(cities)' // default: 'geocode'
      }}
      
      
      styles={{


        textInputContainer: { 
          width: '100%' , 
          overflow: 'visible',
          flexGrow: 1,
          display: 'flex', 
          backgroundColor:"#fff", 
          borderTopWidth: 0,
          borderBottomWidth: 0,
          height: 50,
          overflow: 'visible',
          flexShrink:1
        
        }, 

        listView: {
          position: 'absolute',
          marginTop: 40,
          backgroundColor: 'green',
         
          zIndex: 16,
      
           
      },
 
        textinput:{  
          backgroundColor: 'transparent',
           height: 50,
          
        },
        description: { 
          fontWeight: 'bold'
        },
        predefinedPlacesDescription: {
          color: '#1faadb' 
        }
      }}
      
      currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
      currentLocationLabel="Current location"
      nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
      GoogleReverseGeocodingQuery={{
        // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
      }}
      GooglePlacesSearchQuery={{
        // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
        rankby: 'distance',
        types: 'food'
      }}
 
      filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
     
  
      debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
     
    />
    

     
      </View>
      </ScrollView >
    );
  }
}

const styles = StyleSheet.create({
  container: {
      width:"100%",
      position: 'absolute',
      top: 0
      
  } 

  })

>>>>>>> fc85327fbd38396c1d3875de1331a8da26b0fb0c
