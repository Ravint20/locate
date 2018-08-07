import React,{Component} from 'react';
import { Constants } from 'expo';
import { View } from 'react-native';
import {
  GooglePlacesAutocomplete,
} from 'react-native-google-places-autocomplete'; // 1.2.12



const homePlace = {
  description: 'Home',
  geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
};

const workPlace = {
  description: 'Work',
  geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
};


export default class GooglePlacesInput extends Component{
  render() {

    return (
      <View style={{marginLeft:"5%",flex:1,width:"90%"}}>

        <GooglePlacesAutocomplete
          placeholder="Search on google map"
          minLength={2} 
          autoFocus={false}
          returnKeyType={'search'} 
          listViewDisplayed="auto" 
          fetchDetails={true}
          renderDescription={row => row.description} // custom description render
          onPress={(data, details = null) => {
            
            console.log(data);
            console.log(details);
            

          }}

          getDefaultValue={() => {

            return ''; // text input default value
          }}

          query={{
            
            key: 'AIzaSyC2QhtACfVZ2cr9HVvxQuzxd3HT36NNK3Q',
            language: 'en', 
            types: '(cities)',

          }}
          styles={{
            description: {
              fontWeight: 'bold',
            },
            predefinedPlacesDescription: {
              color: '#1faadb',
            },
          }}

          currentLocation={true} 
          currentLocationLabel="Current location"
          nearbyPlacesAPI="GooglePlacesSearch" 
          GoogleReverseGeocodingQuery={{
           
          }}

          GooglePlacesSearchQuery={{
           
            rankby: 'distance',
            types: 'food',
          }}

          filterReverseGeocodingByTypes={[

            'locality',
            'administrative_area_level_3',

          ]} 
          predefinedPlaces={[homePlace, workPlace]}
          debounce={200}
        />

      </View>
    );
  }
}
