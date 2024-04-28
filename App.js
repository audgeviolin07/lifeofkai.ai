import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import * as Location from "expo-location";
import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Report from "./app/Report.jsx";
import LaunchScreen from "./app/LaunchScreen.jsx";
import LocationScreen from "./app/LocationScreen.jsx";

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    const askForLocationPermission = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
    };
    askForLocationPermission();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Launch Screen" component={LaunchScreen} />
          <Stack.Screen name="Camera Report" component={Report} />
          <Stack.Screen name="Location" component={LocationScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
