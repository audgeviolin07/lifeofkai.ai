import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, SafeAreaView, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import * as Location from 'expo-location';
import LocationScreen from "./LocationScreen";
import MeetupMap from "./meetupMap";

const Stack = createStackNavigator();

const Launchpage = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const askForLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied'); return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    }
    askForLocation();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Welcome Page" component={LaunchScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Location" component={LocationScreen} />
          <Stack.Screen name="Pin" component={MeetupMap} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const LaunchScreen = ({ navigation }) => {
  const handleButtonPress = () => {
    navigation.navigate("Home"); // Navigate to the "Home" screen
  };

  return (
    <View style={{ flex: 0, justifyContent:"space-evenly", flexDirection: "column", backgroundColor: '#6a8e9e' }}>
      
      
      <Image
          style={{width: 400, height: 50}}
          // source={require('./hackdavis.png')} // Specify the path to your image
        />
      <View>
        <Image
          style={{marginLeft: 40, width: 300, height: 100}}
          source={{ uri: "https://images.squarespace-cdn.com/content/v1/607de9646bc6784e77578398/ee3bb302-50dd-4706-9bbe-e43b65ac01d4/LifeOfKaiLogo.png" }}
        />
        <Text style={{ padding: 60, fontSize: 16, fontWeight: "bold", color: "#ffffff", textAlign: "center" }}>
          We cultivate compassion, educate empathy, and foster kindness
        </Text>
      </View>
      <View style={{}}>
        <TouchableOpacity onPress={handleButtonPress} style={{ backgroundColor: "#79a8b4", padding: 15, borderRadius: 5, alignSelf: "center" }}>
          <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>Report A Lost Pet</Text>
        </TouchableOpacity>
        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold", marginTop: 10, textAlign: "center" }}>
          Click the button to report a lost pet!
        </Text>
        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold", marginTop: 10, textAlign: "center" }}>
         
        </Text>
      </View>
      <View style={{padding: 10, flexDirection: 'row', justifyContent: 'space-around' }}>
        <Image
          style={{ marginLeft: 20, width: 150, height: 120,  marginRight: 20 }}
          source={require('./quinn.png')} // Specify the path to your image
        />
        <Image
          style={{ marginLeft: 20, width: 150, height: 120,  marginRight: 20 }}
          source={require('./snowyanddusty.png')} // Specify the path to your image
        />
       </View>
      <View style={{ padding: 30, flexDirection: 'row', justifyContent: 'space-around' }}>
        <Image
          style={{ marginLeft: 20, width: 150, height: 120,  marginRight: 20 }}
          source={require('./yolo.png')} // Specify the path to your image
        />
        <Image
          style={{ marginLeft: 20, width: 150, height: 120,  marginRight: 20 }}
          source={require('./mama.png')} // Specify the path to your image
        />
       
    </View>
    <Text style={{ color: "white", fontSize: 20, fontWeight: "bold", marginTop: 10, textAlign: "center" }}>
         
        </Text>
    </View>
  );
};

export default Launchpage;