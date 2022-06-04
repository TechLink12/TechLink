import * as React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
// import Icon from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icons from "react-native-vector-icons/Ionicons";
import styles from "./style";
export default function App() {
  return (
    <View style={{ paddingTop: 60, paddingBottom: 40, paddingHorizontal: 15 }}>
      <View style={styles.parentview}>
        <View
          style={{
            flex: 3,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../../../assets/bi.png")}
            style={{ width: 110, height: 150 }}
          ></Image>

          <Text style={{ fontSize: 25, marginTop: 50, fontWeight: "bold" }}>
            Place you bid{" "}
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
            <TouchableOpacity style={styles.Skipbtn}>
              <Text style={{ fontWeight: "bold" }}>Skip</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Nextbtn}>
              <Text style={{ color: "white", fontWeight: "bold" }}>Next</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.sliderp}>
            <Text style={styles.slider1}/>
            <Text style={styles.slider2}/>
            <Text style={styles.slider3}/>
          </View>
        </View>
      </View>
    </View>
  );
}
