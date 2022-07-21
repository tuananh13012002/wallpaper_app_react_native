import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';

export default function FlashScreen({navigation}) {
    setTimeout(()=>{
        navigation.replace("Home");
    },3000)
  return (
   <ImageBackground
   style={{flex:1}}
   source={{
       uri:'https://wallpaperaccess.com/full/937101.jpg',
   }}
   >
   </ImageBackground>
  );
}
