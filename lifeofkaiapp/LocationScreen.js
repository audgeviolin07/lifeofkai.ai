// import { Image, View, TouchableOpacity } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet } from 'react-native';
// import { useState, useEffect } from 'react';
// import * as Location from 'expo-location';
// import * as Font from 'expo-font';
// import {TextInput, Button, Alert} from 'react-native';
// import React from 'react';


// export default function App() {
  
//  const [location, setLocation] = useState();
//  const [address, setAddress] = useState();
//  const [endLocation, setEndLocation] = useState('');
//  const navigation = useNavigation();

//  Location.setGoogleApiKey("AIzaSyDWlGmB5Wy5P33OM7IMxMXApfUdLoqxN_M");


//  useEffect(() => { 
//    const getPermissions = async () => {
//      let { status } = await Location.requestForegroundPermissionsAsync();
//      if (status !== 'granted') {
//        console.log("Please grant location permissions");
//        return;
//      };
//      let currentLocation = await Location.getCurrentPositionAsync({});
//      setLocation(currentLocation);
//      console.log("Location:");
//      console.log(currentLocation);
//    };
//    getPermissions();
//  }, []);


//  const geocode = async () => {
//    const geocodedLocation = await Location.geocodeAsync(address);
//    console.log("Geocoded Address:");
//    console.log(geocodedLocation);
//  };
 

//  const reverseGeocode = async () => {
//    const reverseGeocodedAddress = await Location.reverseGeocodeAsync({
//      longitude: location.coords.longitude,
//      latitude: location.coords.latitude
//    });


//    console.log("Reverse Geocoded:");
//    console.log(reverseGeocodedAddress);
//  };
 
//  const isBackgroundRed = true;


//  return (
//    <View style={styles.container}>

//     <TextInput
//     placeholder="Enter your destination location"
//     value={address}
//     onChangeText={text => setEndLocation(text)} 
//     style={styles.inputTextbox}
//     />

//      {/* <Image
//           source={geoBack}
//           style={{ width: '100%', height: '175%', position: 'absolute', top: -100, left: 0, bottom: 0, right: 0, zIndex: -1 }}

//         /> */}
        
    
//      <TextInput placeholder='WHERE AND WHERE ARE YOU GOING?' value={address} onChangeText={setAddress} style={styles.text}/>
//      <Button title="How to start?" onPress={() => Alert.alert('Press the Send Location button to send your location')}/>
//      <Button title="Send Location" onPress={reverseGeocode} style={{ zIndex: 2 }}
//      />

// {/*     
//       <Image
//           source={requestButton}
//           style={{ width: '100%', height: '45%', position: 'absolute', top: 148, zIndex: -1 }}
//         />

//       <Image
//           source={requestBubble}
//           style={{ width: '75%', height: '27%', position: 'absolute', top: 415, zIndex: -1 }}
//         /> */}
//         {/* <TouchableOpacity onPress={() => navigation.navigate('Other Profile')}>
//         <Image
//           source={yes}
//           style={{ width: 100, height: 100, position: 'absolute', right: 20, top: 100, zIndex: -1 }}
//         />
//       </TouchableOpacity>

//       <TouchableOpacity onPress={() => navigation.navigate('Map')}>
//         <Image
//           source={no}
//           style={{ width: 100, height: 100, position: 'absolute', left: 20, top: 100, zIndex: -1 }}
//         />
//       </TouchableOpacity>
    
//      <StatusBar style="auto" /> */}
//    </View>
//  );
// }

// const styles = StyleSheet.create({
//  container: {
//    flex: 0.75,
//    alignItems: 'center',
//    justifyContent: 'center',
//  },
//  text: {
//    textAlign: 'center',
//    fontSize: 10,
//    fontFamily: 'Arial',
//  }, 
//  inputTextbox: {
//   height: 40,
//   borderColor: 'gray',
//   borderWidth: 1,
//   width: '80%',
//   marginBottom: 16,
//   padding: 8,
// }
// });

import { Image, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import * as Font from 'expo-font';
import {TextInput, Button, Alert} from 'react-native';
import React from 'react';



export default function App() {
  
 const [location, setLocation] = useState();
 const [address, setAddress] = useState();
 const [endLocation, setEndLocation] = useState('');
 const navigation = useNavigation();

 const handleButtonPress = () => {
  navigation.navigate("Meetup"); 
};

 Location.setGoogleApiKey("AIzaSyDWlGmB5Wy5P33OM7IMxMXApfUdLoqxN_M");


 useEffect(() => { 
   const getPermissions = async () => {
     let { status } = await Location.requestForegroundPermissionsAsync();
     if (status !== 'granted') {
       console.log("Please grant location permissions");
       return;
     };
     let currentLocation = await Location.getCurrentPositionAsync({});
     setLocation(currentLocation);
     console.log("Location:");
     console.log(currentLocation);
   };
   getPermissions();
 }, []);


 const geocode = async () => {
   const geocodedLocation = await Location.geocodeAsync(address);
   console.log("Geocoded Address:");
   console.log(geocodedLocation);
 };
 

 const reverseGeocode = async () => {
   const reverseGeocodedAddress = await Location.reverseGeocodeAsync({
     longitude: location.coords.longitude,
     latitude: location.coords.latitude
   });


   console.log("Reverse Geocoded:");
   console.log(reverseGeocodedAddress);
 };
 
 const isBackgroundRed = true;


 return (
   <View style={styles.container}>

    <TextInput
    placeholder="Enter your destination location"
    value={address}
    onChangeText={text => setEndLocation(text)} 
    style={styles.inputTextbox}
    />

     {/* <Image
          source={geoBack}
          style={{ width: '100%', height: '175%', position: 'absolute', top: -100, left: 0, bottom: 0, right: 0, zIndex: -1 }}

        /> */}
        
    
     <TextInput placeholder='WHERE AND WHERE ARE YOU GOING?' value={address} onChangeText={setAddress} style={styles.text}/>
     <Button title="How to start?" onPress={() => Alert.alert('Press the Send Location button to send your location')}/>
     <Button title="Send Location" onPress={reverseGeocode} style={{ zIndex: 2 }}
     />

{/*     
      <Image
          source={requestButton}
          style={{ width: '100%', height: '45%', position: 'absolute', top: 148, zIndex: -1 }}
        />

      <Image
          source={requestBubble}
          style={{ width: '75%', height: '27%', position: 'absolute', top: 415, zIndex: -1 }}
        /> */}
        {/* <TouchableOpacity onPress={() => navigation.navigate('Other Profile')}>
        <Image
          source={yes}
          style={{ width: 100, height: 100, position: 'absolute', right: 20, top: 100, zIndex: -1 }}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Map')}>
        <Image
          source={no}
          style={{ width: 100, height: 100, position: 'absolute', left: 20, top: 100, zIndex: -1 }}
        />
      </TouchableOpacity>
    
     <StatusBar style="auto" /> */}
      <TouchableOpacity onPress={handleButtonPress} style={{ backgroundColor: "#79a8b4", padding: 15, borderRadius: 5, alignSelf: "center" }}>
          {/* <Text style={{ fontSize: 18, fontWeight: "bold" }}>Pin it</Text> */}
        </TouchableOpacity>
   </View>
 );
}

const styles = StyleSheet.create({
 container: {
   flex: 0.75,
   alignItems: 'center',
   justifyContent: 'center',
 },
 text: {
   textAlign: 'center',
   fontSize: 10,
   fontFamily: 'Arial',
 }, 
 inputTextbox: {
  height: 40,
  borderColor: 'gray',
  borderWidth: 1,
  width: '80%',
  marginBottom: 16,
  padding: 8,
}
});
