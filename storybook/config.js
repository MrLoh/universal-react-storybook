import { configure } from "@storybook/react";

function loadStories() {
  require("./stories/index.web.js");
}

configure(loadStories, module);
