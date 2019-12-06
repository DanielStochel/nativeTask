import React, { useState, useEffect } from "react";
import fetchComics from "../utilFunctions/fetchComics";
import { Text, View, Image, Button, FlatList } from "react-native";

const Homepage = props => {
  const [comics, setComics] = useState([]);

  useEffect(async () => {
    const lastEightComics = [];
    // Api allows us to fetch only a single comic per request. It's not possible to fetch a bunch of comics at once

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
