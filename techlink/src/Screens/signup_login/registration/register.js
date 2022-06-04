import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Linking,
} from "react-native";
import styles from "./style";
export default function App() {
  return (
    <View style={{ paddingTop: 40, paddingBottom: -30, paddingHorizontal: 15 }}>
      <View style={styles.parentview}>
        <View style={styles.parentViewContainer}>
          <Image
            source={require("../../../../assets/reg.png")}
            style={{ width: 200, height: 200 }}
          ></Image>

          <Text style={{ fontSize: 25, marginTop: 40, fontWeight: "bold" }}>
            Registration{" "}
          </Text>
          <Text style={styles.EnterPNum}>
            Enter your phone number to continue, We will send you OTP to verify{" "}
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <View style={styles.InputTxtContainer}>
            <TextInput
              style={styles.PareaID}
              keyboardType="numeric"
              placeholder="+251"
            ></TextInput>
            <TextInput style={styles.PNum} keyboardType="numeric"></TextInput>
          </View>
          <View style={styles.PolicyContainer}>
            <View style={styles.PolicyContainer2}>
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Text>By continuing You agree with our</Text>
                <Text
                  style={{
                    color: "#db6e3b",
                    paddingLeft: 5,
                    fontSize: 15,
                  }}
                  onPress={() => Linking.openURL("")}
                >
                  terms & condition{" "}
                </Text>
              </View>

              <View style={{ flexDirection: "row", paddingLeft: "30%" }}>
                <Text>and</Text>
                <Text
                  style={{
                    color: "#db6e3b",
                    flexDirection: "row",
                    marginLeft: 5,
                  }}
                  onPress={() => Linking.openURL("")}
                >
                  privacy policy
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{ marginTop: "10%", paddingRight: 10, alignItems: "center" }}
          >
            <TouchableOpacity style={styles.continuebtn}>
              <Text style={styles.ContinueTxt}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
