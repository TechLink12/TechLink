import * as React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

// import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./style";

const Findload=( {navigation})=> {
  return (
    <View style={{ flex:1, paddingTop: 20, paddingBottom: 20, paddingHorizontal: 10 }}>
      <View style={styles.parentview}>
        <View
          style={{
            flex: 3,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../../../assets/techpkg.png")}
            style={{ width: 200, height: 150 }}
          ></Image>

          <Text style={{ fontSize: 25, marginTop: 50, fontWeight: "bold" }}>
            Find load to deliver{" "}
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <View style={styles.FindLoadView}>
            <TouchableOpacity style={styles.Skipbtn}>
              <Text style={{ fontWeight: "bold" }}>Skip</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Nextbtn} onPress={() => navigation.navigate('Register')}>
              <Text style={{ color: "white", fontWeight: "bold" }}>Next</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.SlideContainer}>
            <Text style={styles.Slide1}/>
            <Text style={styles.Slide2}/>
            <Text style={styles.slide3}/>
          </View>
        </View>
      </View>
    </View>
  );
}
export default Findload;