import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";

const LaunchScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-evenly",
        flexDirection: "column",
        backgroundColor: "#8ccad8",
      }}
    >
      <View>
        <Image
          style={{ marginLeft: 40, width: 300, height: 100 }}
          source={{
            uri: "https://images.squarespace-cdn.com/content/v1/607de9646bc6784e77578398/ee3bb302-50dd-4706-9bbe-e43b65ac01d4/LifeOfKaiLogo.png",
          }}
        />
        <Text
          style={{
            padding: 12,
            fontSize: 16,
            fontWeight: "bold",
            color: "#ffffff",
            textAlign: "center",
          }}
        >
          We cultivate compassion, educate empathy, and foster kindness
        </Text>
      </View>
      <View style={{ paddingBottom: 250 }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Camera Report");
          }}
          style={{
            backgroundColor: "#00C5A8",
            padding: 15,
            borderRadius: 5,
            alignSelf: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
            Report A Lost Pet
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Image Picker");
          }}
          style={{
            backgroundColor: "#00C5A8",
            padding: 15,
            borderRadius: 5,
            alignSelf: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
            Upload Your Own Photo
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "bold",
            marginTop: 10,
            textAlign: "center",
          }}
        >
          Click the button to report a lost pet!
        </Text>
      </View>
    </View>
  );
};

export default LaunchScreen;
