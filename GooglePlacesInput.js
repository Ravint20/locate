import React,{Component} from 'react';
import { Constants } from 'expo';
import { View,SafeAreaView,ScrollView } from 'react-native';
import {
  GooglePlacesAutocomplete,
} from 'react-native-google-places-autocomplete'; // 1.2.12



 

export default class GooglePlacesInput extends Component{
  render() {

    return (
      <View style={{marginLeft:"5%",flex:1,width:"90%",}}>
 
         <GooglePlacesAutocomplete
         
      placeholder='Search'
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
        container: {
          zIndex: 10,
          overflow: 'visible', 
          backgroundColor: 'blue',
            flex:1
         
        }, 
        textInputContainer: {
          width: '100%' , 
          overflow: 'visible',
          flexGrow: 1,
        display: 'flex', 
      
        
        }, 

        listView: {
          position: 'absolute',
          marginTop: 40,
          backgroundColor: 'green',
          elevation: 3,
          zIndex: 10
      },
 
        textinput:{  
          backgroundColor: 'transparent',
          flex: 1
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
    );
  }
}
