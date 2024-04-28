import React, { useEffect, useState } from 'react';
import { Button } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Polyline, Marker } from 'react-native-maps';
import { decode } from '@mapbox/polyline';


const MeetupMap = ({ route, navigation }) => {
//   const { destination } = route.params;
  const { destination } = { latitude: 37.7749, longitude: -122.4194 } ;
  const GOOGLE_MAPS_APIKEY = 'AIzaSyDWlGmB5Wy5P33OM7IMxMXApfUdLoqxN_M';
 
  const [location, setLocation] = useState(null);
  const [coords, setCoords] = useState([]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
    })();
  }, []);

  useEffect(() => {
    if (location) {
      fetchDirections();
    }
  }, [location]);

  const fetchDirections = async () => {

    // let resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${location.latitude},${location.longitude}&destination=${destination.latitude},${destination.longitude}&key=${GOOGLE_MAPS_APIKEY}`)
    let resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=40.7128,-74.0060&destination=34.0522,-118.2437&key=${GOOGLE_MAPS_APIKEY}`);

    let respJson = await resp.json();
    let points = decode(respJson.routes[0].overview_polyline.points);
    let coords = points.map(point => {
      return  {
        latitude: point[0],
        longitude: point[1]
      }
    })
    setCoords(coords);
  };

  const handleDevSkip = () => {
      setLocation(destination);
      navigation.navigate('tripCompleted', { destination: destination });
  };

  return (
    location &&
    <MapView
      initialRegion={{
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      style={{ flex: 1 }}
    >
      <Marker coordinate={location} />
      <Marker coordinate={destination} />
      
      <Polyline 
    // coordinates={[
    //   {latitude: location.latitude, longitude: location.longitude},
    //   {latitude: destination.latitude, longitude: destination.longitude},
    // ]}
    coordinates={[
        { latitude: 37.78825, longitude: -122.4324 }, // Hardcoded start location
        { latitude: 37.7749, longitude: -122.4194 },   // Hardcoded destination location
      ]}
    strokeWidth={3} 
    strokeColor="hotpink" 
/>

      {/* Developer Skip Button */}
      <Button title="Developer Skip" onPress={handleDevSkip} />

    </MapView>
  );
};

export default MeetupMap;