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
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10%",
          }}
        >
          <Image
            source={require("../../../../assets/varfy.png")}
            style={{ width: 200, height: 200 }}
          ></Image>

          <Text style={{ fontSize: 25, marginTop: 40, fontWeight: "bold" }}>
            Verification{" "}
          </Text>
          <View style={{ flexDirection: "column" }}>
            <Text style={styles.EnterDigitNum}>
              Enter the 4 digit number that was sent{" "}
            </Text>
            <Text
              style={{ fontSize: 20, fontWeight: "bold", paddingLeft: "28%" }}
            >
              +xxx xxxxx xxxx
            </Text>
          </View>
        </View>
        <View style={{ flex: 2 }}>
          <View style={styles.Digitcontainer}>
            <TextInput
              style={styles.DigitHolder}
              keyboardType="numeric"
            ></TextInput>
            <TextInput
              style={styles.DigitHolder}
              keyboardType="numeric"
            ></TextInput>
            <TextInput
              style={styles.DigitHolder}
              keyboardType="numeric"
            ></TextInput>
            <TextInput
              style={styles.DigitHolder}
              keyboardType="numeric"
            ></TextInput>
          </View>
          <View style={styles.ResendContainer2}>
            <View
              style={{
                justifyContent: "space-evenly",
                paddingTop: "25%",
              }}
            >
              <View style={styles.ResendContainer}>
                <Text
                  style={styles.ResendTxt}
                  onPress={() => Linking.openURL("")}
                >
                  Resend code in 00:038{" "}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
