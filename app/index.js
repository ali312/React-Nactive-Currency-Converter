import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import Navigator from './config/routes';

EStyleSheet.build({
  $primaryBlue: "#4F6D7A",
  $primaryOrange: "#D57A66",
  $primaryGreen: "#00BD9D",
  $primaryPurple: "#9E76AF",

  $white: "#fff",
  $border: "#E2E2E2",
  $inputText: "#797979",
  $lightGray: "#EFEFEF",
  $darkText: "#343434"
});

export default () => <Navigator />;
