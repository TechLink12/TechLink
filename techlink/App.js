import * as React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput } from "react-native";
// import Icon from "react-native-vector-icons/FontAwesome";

export default function App() {
  return (
    <View style={{ paddingTop: 60, paddingBottom: 40, paddingHorizontal: 15 }}>
      <View
        style={{
          backgroundColor: "white",
          width: "100%",
          height: "100%",
        }}
      >
        <View
          style={{
            flex: 3,
            justifyContent: "center",
            alignItems: "center",
            marginTop: -160,
          }}
        >
          <Image
            source={require("./assets/reg.png")}
            style={{ width: 200, height: 200 }}
          ></Image>

          <Text style={{ fontSize: 25, marginTop: 40, fontWeight: "bold" }}>
            Registration{" "}
          </Text>
          <Text
            style={{
              fontSize: 15,
              marginTop: 10,
              alignItems: "center",
              paddingRight: "10%",
              paddingLeft: "10%",
            }}
          >
            Enter your phone number to continue, We will send you OTP to verify{" "}
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginTop: 10,
              padding: 20,
            }}
          >
            <TextInpu style={{borderRadius:20,}}></TextInpu>
          </View>
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                backgroundColor: "#db6e3b",
                width: 9,
                height: 9,
                borderRadius: 100,
                marginRight: 5,
              }}
            ></Text>
            <Text
              style={{
                backgroundColor: "#adaaa8",
                width: 8,
                height: 8,
                borderRadius: 100,
                marginRight: 5,
              }}
            ></Text>
            <Text
              style={{
                backgroundColor: "#adaaa8",
                width: 8,
                height: 8,
                borderRadius: 100,
              }}
            ></Text>
          </View>
        </View>
      </View>
    </View>
  );
}
