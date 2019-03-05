import * as React from "react";
import { AppRegistry, View } from "react-native";
import Stories from "./storybook";
import { name as appName } from "./app.json";

const App = () => (
  <View style={{ flex: 1, backgroundColor: "#E6E6E6" }}>
    <Stories />
  </View>
);

AppRegistry.registerComponent(appName, () => App);
