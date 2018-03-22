import EStyleSheet from "react-native-extended-stylesheet";
import { StatusBar, Dimensions, Platform } from "react-native";

export default EStyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    "@media ios": {
      paddingTop: 30
    },
    "@media android": {
      paddingTop: StatusBar.currentHeight
    }
  },
  button: {
    alignSelf: "flex-end",
    paddingVertical: 5,
    paddingHorizontal: 14
  },
  icon: {
    width: 18
  }
});
