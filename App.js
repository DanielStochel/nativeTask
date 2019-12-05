import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import fetchComics from "./app/utilFunctions/fetchComics";

const App = props => {
  const [comics, setComics] = useState([]);

  useEffect(async () => {
    const lastEightComics = [];
    await fetchComics(lastEightComics, 2237);
    await fetchComics(lastEightComics, 2236);
    await fetchComics(lastEightComics, 2235);
    await fetchComics(lastEightComics, 2234);
    await fetchComics(lastEightComics, 2233);
    await fetchComics(lastEightComics, 2232);
    await fetchComics(lastEightComics, 2231);
    await fetchComics(lastEightComics, 2230);
    setComics(lastEightComics);
  }, []);
  
  const renderComics = () => {
    return comics.map(detailOfComics => {
      return (
        <View>
          <Text>{detailOfComics.alt}</Text>
          <Image
            style={{ width: 100, height: 100 }}
            source={{ uri: detailOfComics.img }}
          />
        </View>
      );
    });
  };

  return <View>{renderComics()}</View>;
};

export default App;
