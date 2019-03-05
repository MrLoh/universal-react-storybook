import React from "react";
import { storiesOf } from "@storybook/react-native";
import { View, Text } from "react-native";

const style = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center"
};

const CenteredView = ({ children }) => <View style={style}>{children}</View>;

storiesOf("CenteredView", module).add("default view", () => (
  <CenteredView>
    <Text>Hello Storybook</Text>
  </CenteredView>
));

storiesOf("CenteredView", module).add(
  "default view 2",
  () => (
    <CenteredView>
      <Text>Hello Storybook 2</Text>
    </CenteredView>
  ),
  { notes: `This is a **cool** component` }
);
