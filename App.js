import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from "axios";

export default function App() {
  const [name, setName] = useState('changing name')
  useEffect(async() => {
    const fetchComics = await axios.get("https://xkcd.com/info.0.json");
    console.log(fetchComics)
  }, [])
  return (
    <View style={styles.container}>
      <Text>{name}dsadsadasda</Text>
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
