import * as React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
// import Icon from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icons from "react-native-vector-icons/Ionicons";

export default function App() {
  return (
    <View style={{ paddingTop: 60, paddingBottom: 40, paddingHorizontal: 15 }}>
      <View
        style={{
          backgroundColor: "white",
          width: "100%",
          height: "100%",
          borderColor:'#1e128a',borderRadius:60,
          borderLeftWidth:0.7,
          borderTopWidth:0.5,
          borderTopRightRadius:60,
          borderBottomRightRadius:60,
          // borderRadius:60,
          borderRightWidth:6,
          borderBottomWidth:6
         
        }}
      >
        <View
          style={{
            flex: 3,
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 100,
          }}
        >
          <Image></Image>
          <Icon
            name="truck-check-outline"
            color="#1e128a"
            size={150}
            style={{ marginTop: -120, height: 250 }}
          ></Icon>
          {/* <Icons
            name="ios-search-outline"
            color="#1e128a"
            borderWidth={0.1}
            size={90}
            style={{ marginTop: -100, height: 100 }}
          ></Icons> */}

          {/*  */}
          {/* <Text style={{ fontSize: 25, marginTop: 80, fontWeight: "bold" }}>
            Find Load to deliver{" "}
          </Text> */}
          <Text style={{ fontSize: 25, marginTop:-80, fontWeight: "bold" }}>
            Deliver loads on time{" "}
          </Text>
        </View>
        <View style={{ flex: 1}}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginTop: 10,
              padding: 20,
            }}
          >
            {/* <TouchableOpacity
              style={{
                backgroundColor: "white",
                width: 130,
                height: 50,
                alignItems: "center",
                justifyContent: "center",
                borderColor: "#1e128a",
                borderRadius: 15,

                borderRightWidth: 3,
                borderBottomWidth: 3,
                borderTopWidth: 0.5,
                borderLeftWidth: 0.5,
              }}
            >
              <Text>Skip</Text>
            </TouchableOpacity> */}
            <TouchableOpacity
              style={{
                width: "75%",

                height: 50,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#1e128a",
                borderColor: "#1697f2",
                borderRadius: 15,

                borderRightWidth: 3,
                borderBottomWidth: 3,
                borderTopWidth: 0.5,
                borderLeftWidth: 0.5,
              }}
            >
              <Text style={{ color: "white",fontWeight:'bold' }}>Get Started</Text>
            </TouchableOpacity>
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
