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
        <View style={styles.parentViewContainer}>
          <Icon
            name="truck-check-outline"
            color="#1e128a"
            size={150}
            style={{ marginTop: -120, height: 250 }}
          ></Icon>

          <Text style={{ fontSize: 25, marginTop: -80, fontWeight: "bold" }}>
            Deliver loads on time{" "}
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
            <TouchableOpacity style={styles.GetStartdBtn}>
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Get Started
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.SliderContainer}>
            <Text style={styles.Slider1}></Text>
            <Text style={styles.Slider2}></Text>
            <Text style={styles.Slider3}></Text>
          </View>
        </View>
      </View>
    </View>
  );
}
