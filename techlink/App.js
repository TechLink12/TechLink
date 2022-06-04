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

export default function App() {
  return (
    <View style={{ paddingTop: 40, paddingBottom: -30, paddingHorizontal: 15 }}>
      <View
        style={{
          backgroundColor: "white",
          width: "100%",
          height: "100%",
          marginBottom: "-10%",
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10%",
          }}
        >
          <Image
            source={require("./assets/varfy.png")}
            style={{ width: 200, height: 200 }}
          ></Image>

          <Text style={{ fontSize: 25, marginTop: 40, fontWeight: "bold" }}>
            Verification{" "}
          </Text>
          <View style={{ flexDirection: "column" }}>
            <Text
              style={{
                fontSize: 16,
                marginTop: 10,
                alignItems: "center",
                paddingRight: "10%",
                paddingLeft: "10%",
              }}
            >
              Enter the 4 digit number that was sent {" "}
            </Text>
            <Text style={{fontSize:20,fontWeight:"bold",paddingLeft:'28%'}}>+xxx xxxxx xxxx</Text>
          </View>
        </View>
        <View style={{ flex: 2 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginTop: "10%",
              padding: '-10%',
            }}
          >
            <TextInput
              style={{
                borderRadius: 11,
                width: "20%",
                height: "130%",
                borderBottomWidth: 4,
                borderRightWidth: 4,
                borderTopWidth: 0.5,
                borderLeftWidth: 0.5,
                borderRightColor: "#3480eb",
                borderBottomColor: "#3480eb",
                alignItems: "center",
                paddingLeft: 10,
                paddingBottom: 8,
              }}
              keyboardType="numeric"
            ></TextInput>
            <TextInput
              style={{
                borderRadius: 11,
                width: "20%",
                height: "130%",
                borderBottomWidth: 4,
                borderRightWidth: 4,
                borderTopWidth: 0.5,
                borderLeftWidth: 0.5,
                borderRightColor: "#3480eb",
                borderBottomColor: "#3480eb",
                alignItems: "center",
                paddingLeft: 10,
                paddingBottom: 8,
              }}
              keyboardType="numeric"
            ></TextInput>
            <TextInput
              style={{
                borderRadius: 11,
                width: "20%",
                height: "130%",
                borderBottomWidth: 4,
                borderRightWidth: 4,
                borderTopWidth: 0.5,
                borderLeftWidth: 0.5,
                borderRightColor: "#3480eb",
                borderBottomColor: "#3480eb",
                alignItems: "center",
                paddingLeft: 10,
                paddingBottom: 8,
              }}
              keyboardType="numeric"
            ></TextInput>
            <TextInput
              style={{
                borderRadius: 11,
                width: "20%",
                height: "130%",
                borderBottomWidth: 4,
                borderRightWidth: 4,
                borderTopWidth: 0.5,
                borderLeftWidth: 0.5,
                borderRightColor: "#3480eb",
                borderBottomColor: "#3480eb",
                alignItems: "center",
                paddingLeft: 10,
                paddingBottom: 8,
              }}
              keyboardType="numeric"
            ></TextInput>
          </View>
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              width: "100%",
              paddingLeft: "5%",
            }}
          >
            <View
              style={{
                justifyContent: "space-evenly",
                paddingTop: "25%",
              }}
            >
              <View
                style={{
                  paddingTop:'75%',
                  paddingLeft:'20%'
                }}
              >
                <Text
                  style={{
                    color: "#db6e3b",
                    paddingLeft: 5,
                    fontSize: 15,
                  }}
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
