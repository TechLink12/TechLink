import * as React from "react";
import { Text, View, StyleSheet, Image,FontAwesomeIcon } from "react-native";

export default function App() {
  return (
    <View style={{ paddingTop: 60, paddingBottom: 40, paddingHorizontal: 15 }}>
      <View
        style={{
          backgroundColor: "white",
          width: "100%",
          height: "100%",
          borderRadius: 60,
          borderColor: "#1e128a",
          borderRightWidth: 7,
          borderBottomWidth: 7,
          borderTopWidth: 0.5,
          borderLeftWidth: 0.9,
        }}
      >
        <View
          style={{ flex: 3, justifyContent: "center", alignItems: "center" }}
        >
          <FontAwesomeIcon icon="fa-thin fa-box-taped" style />
          <Image
          style={{}}
            source={{
              uri: "https://img.icons8.com/pastel-glyph/64/undefined/box-search-1.png",
            }}
            width={100}
            height={100}
          />
          <Text style={{ fontSize: 25 }}>Find Load to deliver </Text>
        </View>
        <View style={{ flex: 1, backgroundColor: "white" }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginTop: 100,
              padding:20,
            }}
          >
            <Text>Login</Text>
            <Text>Sig Up</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text>Slider</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
