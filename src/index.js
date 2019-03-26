import React from "react";
import ReactDOM from "react-dom";
import Text from "./Text";
import TextWithProp from "./TextWithProp";
import LikeDislike from "./LikeDislike";

const demo = 3;
let component;
switch (demo) {
  case 1:
    component = <Text />;
    break;
  case 2:
    component = <TextWithProp value="Text from prop" />;
    break;
  case 3:
    component = <LikeDislike />;
    break;
}

const rootElement = document.getElementById("root");
ReactDOM.render(component, rootElement);
