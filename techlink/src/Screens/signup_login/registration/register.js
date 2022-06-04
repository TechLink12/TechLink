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
// import Icon from "react-native-vector-icons/FontAwesome";

export default function App() {
  return (
    <View style={{ paddingTop: 40, paddingBottom: -30, paddingHorizontal: 15 }}>
      <View
        style={{
          backgroundColor: "white",
          width: "100%",
          height: "100%",
          marginBottom:'-10%'
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop:'10%',
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
        <View style={{ flex:1 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginTop: "15%",
              padding: 20,
            }}
          >
            <TextInput
              style={{
                borderRadius: 11,
                width: "23%",
                height: "120%",
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
              placeholder="+251"
            ></TextInput>
            <TextInput
              style={{
                borderRadius: 10,
                width: "70%",
                height: "120%",
                borderBottomWidth: 4,
                borderRightWidth: 4,
                borderTopWidth: 0.5,
                borderLeftWidth: 0.5,
                borderRightColor: "#3480eb",
                borderBottomColor: "#3480eb",
                alignItems: "center",
                paddingTop: -15,
                paddingLeft: 10,
                paddingBottom: 8,
              }}              keyboardType="numeric"

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
                  flexDirection: "row",
                }}
              >
                <Text>By continuing You agree with our</Text>
                <Text
                  style={{
                    color: "#db6e3b",
                    paddingLeft: 5,
                    fontSize:15,
                  }}
                  onPress={() => Linking.openURL("")}
                >
                  terms & condition{" "}
                </Text>
              </View>

              <View style={{ flexDirection: "row",paddingLeft:'30%' }}>
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
          <View style={{marginTop:"10%", paddingRight:10, alignItems:"center"}}>
              <TouchableOpacity style={{
                backgroundColor:'#101b91',
                width:'75%',
                height:'35%',
                borderRadius:15,
                borderRightWidth:4,
                borderBottomWidth:4,
                borderBottomColor:'#db711a',
                borderRightColor:'#db711a',
              }}>
                <Text style={{fontWeight:"bold",color:'white',paddingLeft:'30%',fontSize:20,paddingTop:5}}>Continue</Text>
              </TouchableOpacity>
            </View>
        </View>
      </View>
    </View>
  );
}
