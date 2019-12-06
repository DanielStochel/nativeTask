import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Homepage from "./app/components/Homepage";
import DetailsComp from "./app/components/DetailsComp";

const RootStack = createStackNavigator(
  {
    Home: Homepage,
    Details: DetailsComp
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(RootStack);

const App = props => {
  
  return <AppContainer />
};

export default App;
