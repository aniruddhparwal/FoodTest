import React, { useEffect, useState } from 'react'
import { View, Text, BackHandler, TouchableOpacity, AppRegistry, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';


export default function Scanner({ navigation }) {

  const onSuccess = e => {
    console.log("code is :", e.data)
    navigation.navigate('SelectedRes', { code: e.data })
    // navigation.goBack()
  };

  useEffect(() => {
    const backAction = () => {
      navigation.goBack()
      return true
    };
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    // return () => backHandler.remove();
  }, []);
  return (
    <View>
      <View style={{
        flexDirection: "row",
        backgroundColor: "#c4c4c4",
        // justifyContent:"center",
        alignItems: "center",
      }}>
        <View style={{
          marginVertical: 10
        }}>
          <Icon onPress={() => navigation.goBack()} name="arrow-left" size={50} color="#000" />
        </View>
        <Text style={{
          marginHorizontal: 10
        }} >Scan it</Text>
      </View>
      <View style={{ marginTop: 60 }}>
        <QRCodeScanner
          onRead={onSuccess}
          flashMode={RNCamera.Constants.FlashMode.torch}
        />
      </View>
      <View style={{ marginTop: 450, flexDirection: 'row', justifyContent: 'center' }}>
        <Text style={{ fontSize: 50 }}>Just Scan Here</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  }
});

AppRegistry.registerComponent('default', () => ScanScreen);
