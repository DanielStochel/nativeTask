import React from "react";
import { Image, Dimensions } from "react-native";

const DetailsComp = props => {
  const win = Dimensions.get("window");
  return (
    <Image
      style={{
        alignSelf: "center",
        width: win.width,
        height: win.height
      }}
      resizeMode="stretch"
      source={{ uri: props.navigation.state.params.img }}
    />
  );
};

export default DetailsComp;
