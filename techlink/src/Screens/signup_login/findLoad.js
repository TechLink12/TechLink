import * as React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
// import Icon from "react-native-vector-icons/FontAwesome";

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
          }}
        >
          <Image source={require('./assets/techpkg.png')} style={{width:200,height:150}}></Image>
         
          <Text style={{ fontSize: 25, marginTop: 50, fontWeight: "bold" }}>
            Find load to deliver{" "}
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
            <TouchableOpacity
              style={{
                backgroundColor: "white",
                width: '40%',
                height: 50,
                alignItems: "center",
                justifyContent: "center",
                borderColor: "#1e128a",
                borderRadius: 15,

                borderRightWidth: 3,
                borderBottomWidth: 4,
                borderTopWidth: 0.5,
                borderLeftWidth: 0.5,
              }}
            >
              <Text style={{fontWeight:"bold"}}>Skip</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: "40%",

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
              <Text style={{ color: "white",fontWeight:'bold' }}>Next</Text>
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
