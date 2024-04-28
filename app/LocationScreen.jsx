import { Image, View, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import * as Location from "expo-location";
import * as Font from "expo-font";
import { TextInput, Button, Alert } from "react-native";
import React from "react";

const LocationScreen = ({ navigation }) => {
  const [location, setLocation] = useState();
  const [address, setAddress] = useState();
  const [endLocation, setEndLocation] = useState("");

  Location.setGoogleApiKey("AIzaSyDWlGmB5Wy5P33OM7IMxMXApfUdLoqxN_M");

  useEffect(() => {
    const getPermissions = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Please grant location permissions");
        return;
      }
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
      latitude: location.coords.latitude,
    });

    console.log("Reverse Geocoded:");
    console.log(reverseGeocodedAddress);
    Alert.alert("You've successfully reported a lost pet");
    navigation.navigate("Launch Screen");
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter your destination location"
        value={address}
        onChangeText={(text) => setEndLocation(text)}
        style={styles.inputTextbox}
      />
      <TextInput
        placeholder="WHERE AND WHERE ARE YOU GOING?"
        value={address}
        onChangeText={setAddress}
        style={styles.text}
      />
      <Button
        title="How to start?"
        onPress={() =>
          Alert.alert("Press the Send Location button to send your location")
        }
      />
      <Button
        title="Send Location"
        onPress={reverseGeocode}
        style={{ zIndex: 2 }}
      />
    </View>
  );
};

export default LocationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 0.75,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 10,
    fontFamily: "Arial",
  },
  inputTextbox: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "80%",
    marginBottom: 16,
    padding: 8,
  },
});
