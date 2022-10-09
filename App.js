import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Card from './src/components/Card';
import DashBoard from './src/components/DashBoard';
import Questions from './src/components/Questions';

export default function App(){
  return(
    <ScrollView style={style.container}>
      {/* <Card/> */}
      {/* <DashBoard /> */}
      <Questions />
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#444',
    padding: 10,
    // marginTop: 60,
  },
})