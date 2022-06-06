import * as React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MapView, { Callout, Circle, Marker } from "react-native-maps";

export default function App() {
  const [pin, setPin] = React.useState({
    latitude: 9.005401,
    longitude: 38.763611,
  });
  const [region, setRegion] = React.useState({
    latitude: 9.005401,
    longitude: 38.763611,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  return (
    <View style={{ marginTop: 50, flex: 1 }}>
		<View style={{width:'100%',height:100}}>
		<GooglePlacesAutocomplete
        placeholder="Search"
        fetchDetails={true}
        GooglePlacesSearchQuery={{
          rankby: "distance"
        }}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          setRegion({
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          });
        }}
        query={{
          key: "AIzaSyC9NZEwBc0II-1gW9EGj3nar0aIQ940_OY",
          language: "en",
          components: "country:us",
          types: "establishment",
          radius: 30000,
          location: `${region.latitude}, ${region.longitude}`,
        }}
        styles={{
          container: {
            flex: 0,
            position: "absolute",
            // paddingTop: 100,
            width: "100%",
            zIndex: 1,
           
            height: 80,
          },
          listView: { backgroundColor: "white" },
        }}
      />
		</View>

      <MapView
        // initial region Addis Ababa
        style={styles.map}
        initialRegion={{
          latitude: 9.005401,
          longitude: 38.763611,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        // set the map provider to google
        provider="google"
      >
        <Marker
          coordinate={{
            latitude: region.latitude,
            longitude: region.longitude,
          }}
        />
        <Marker
          coordinate={pin}
          pinColor="black"
          draggable={true}
          onDragStart={(e) => {
            console.log("Drag start", e.nativeEvent.coordinates);
          }}
          onDragEnd={(e) => {
            setPin({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
            });
          }}
        >
          <Callout>
            <Text>You'r here</Text>
          </Callout>
        </Marker>
        <Circle center={pin} radius={100} />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

