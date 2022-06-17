import * as React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TextInput,
  
} from "react-native";
import Colors from "./colors";
import Icon from "react-native-vector-icons/Ionicons";


export default function TopSearchBar() {
  

  return (
    <View style={{ marginTop: 25, flex: 1 }}>
      <View style={styles.Maptop}>
       
        <View style={{flexDirection:'row'}}>
			<Icon name="grid" size={28} style={styles.searchicon}></Icon>
          <TextInput placeholder="Search Load" placeholderTextColor={Colors.white} style={styles.searchTxtInput}></TextInput>
        </View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  
  searchTxtInput: {
    color: Colors.white,
    alignContent: "center",
    alignItems: "center",
    fontSize: 20,
    fontWeight: "bold",
	marginLeft:70
  },
  searchicon:{
	  color:Colors.orange,
	  marginStart:30,
      paddingTop:-400
	  
	  
	  
  }
});
