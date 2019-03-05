import * as React from "react";
import { AppRegistry, View } from "react-native";
import { getStorybookUI } from "@storybook/react-native";

import { name as appName } from "./app.json";
import "./storybook/config";
import "./storybook/addons";

// options: https://github.com/storybooks/storybook/tree/master/app/react-native#start-command-parameters
const StorybookUIRoot = getStorybookUI({});

const App = () => (
  <View style={{ flex: 1, backgroundColor: "#E6E6E6" }}>
    <StorybookUIRoot />
  </View>
);

AppRegistry.registerComponent(appName, () => App);
