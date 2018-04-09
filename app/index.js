import React from "react";
import Home from "./screens/Home";
import CurrencyList from "./screens/CurrencyList";
import Options from "./screens/Options";
import EStyleSheet from "react-native-extended-stylesheet";

EStyleSheet.build({
  $primaryBlue: "#4F6D7A",
  $white: "#fff",
  $border: "#E2E2E2",
  $inputText: "#797979",
  $lightGray: "#EFEFEF",
  $darkText: "#343434"
});

export default () => <Options />;
