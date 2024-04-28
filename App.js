import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import * as Location from "expo-location";
import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ImagePickerScreen from "./app/ImagePickerScreen";
import Report from "./app/Report";
import LaunchScreen from "./app/LaunchScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const askForLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    };
    askForLocation();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Launch Screen" component={LaunchScreen} />
          <Stack.Screen name="Image Picker" component={ImagePickerScreen} />
          <Stack.Screen name="Camera Report" component={Report} />
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
