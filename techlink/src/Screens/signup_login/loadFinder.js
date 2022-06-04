import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function App() {
  return (
    <View style={{ paddingTop: 60, paddingBottom: 30, paddingHorizontal: 15 }}>
      <View
        style={{
          backgroundColor: 'white',
          width: '100%',
          height: '100%',
          borderRadius: 60,
          borderColor: 'purple',
          borderRightWidth: 5,
          borderBottomWidth:5,
          borderTopWidth: 0.2,
          borderLeftWidth: 0.2
        }}>
          <View style={{flex: 3,justifyContent:'center', alignItems: 'center'}}>
            <Image source={{uri: 'https://img.icons8.com/pastel-glyph/64/undefined/box-search-1.png'}} width={100} height={100} />
            <Text>Find Load to deliver </Text>
          </View>
          <View style={{flex: 1, backgroundColor: 'white'}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 100 }}>
              <Text>Login</Text>
              <Text>Sig Up</Text>
            </View>
            <View style={{alignItems:'center'}}>
              <Text>Slider</Text>
            </View>
          </View>
        </View>
    </View>
  );
}