// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>fuck it we ball!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

//imported open source
import React from "react";
import { View, Text, TouchableOpacity, SafeAreaView, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";

const Stack = createStackNavigator();

const Launchpage = () => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Welcome Page" component={LaunchScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={HomeScreen} />
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
    <View style={{ flex: 1, justifyContent:"space-evenly", flexDirection: "column", backgroundColor: '#8ccad8' }}>
      <View>
        <Image
          style={{marginLeft: 40, width: 300, height: 100}}
          source={{ uri: "https://images.squarespace-cdn.com/content/v1/607de9646bc6784e77578398/ee3bb302-50dd-4706-9bbe-e43b65ac01d4/LifeOfKaiLogo.png" }}
        />
        <Text style={{ padding: 12, fontSize: 16, fontWeight: "bold", color: "#ffffff", textAlign: "center" }}>
          We cultivate compassion, educate empathy, and foster kindness
        </Text>
      </View>
      <View style={{paddingBottom: 250}}>
        <TouchableOpacity onPress={handleButtonPress} style={{ backgroundColor: "#00C5A8", padding: 15, borderRadius: 5, alignSelf: "center" }}>
          <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>Report A Lost Pet</Text>
        </TouchableOpacity>
        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold", marginTop: 10, textAlign: "center" }}>
          Click the button to report a lost pet!
        </Text>
      </View>
    </View>
  );
};

export default Launchpage;