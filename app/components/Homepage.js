import React, { useState, useEffect } from "react";
import fetchComics from "../utilFunctions/fetchComics";
import { Text, View, Image, Button, FlatList } from "react-native";
import fetchCurrComic from "../utilFunctions/fetchCurrComic";

const Homepage = props => {
  const [comics, setComics] = useState([]);

  useEffect(async () => {
    // Api allows us to fetch only a single comic per request. It's not possible to fetch a bunch of comics at once
    const getIndexOfActualComic = await fetchCurrComic();
    const lastEightComics = await fetchComics(getIndexOfActualComic);

    setComics(lastEightComics);
  }, []);

  const renderComics = ({ item }) => {
    return (
      <View>
        <View
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto",
            margin: 20
          }}
        >
          <Text>{item.title}</Text>
          <Image
            title="Go to Details"
            style={{ width: 100, height: 100 }}
            source={{ uri: item.img }}
          />
        </View>

        <Button
          title="Go to Details"
          style={{ marginTop: 50 }}
          onPress={() =>
            props.navigation.navigate("Details", {
              img: item.img
            })
          }
        />
      </View>
    );
  };

  return <FlatList data={comics} renderItem={renderComics} />;
};

export default Homepage;
