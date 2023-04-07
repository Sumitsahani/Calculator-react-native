import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';

export default function App() {

  const [darkTheme ,setDarktheme]= useState(false);

  const color ={
    dark:"#22252D",
    dark1:"#292B36",
    dark2:"#272B33",
    light: "#FFF",
    light1:"#F1F1F1",
    light2:"#F7F7F7"
  }
  return (
    <View >
     <Switch  value={darkTheme} onValueChange={()=>setDarktheme(!darkTheme)} 
      thumbColor={darkTheme? color.light : color.dark} trackColor={{true: color.light2 , false: color.dark2}}
     />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
