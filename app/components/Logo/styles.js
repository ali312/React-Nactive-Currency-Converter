import { Dimensions } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

const imageWidth = Dimensions.get("window").width * 0.5;

export default EStyleSheet.create({
  $largeContainerSize: imageWidth,
  $largeImageSize: imageWidth * 0.5,
  $smallContainerSize: imageWidth * 0.5,
  $smallImageSize: imageWidth * 0.25,
  container: {
    alignItems: "center"
  },
  containerImage: {
    alignItems: "center",
    justifyContent: "center",
    width: "$largeContainerSize",
    height: "$largeContainerSize"
  },
  logo: {
    // alignItems: "center",
    // justifyContent: "center",
    width: "$largeImageSize"
  },
  text: {
    // alignItems: "center",
    // justifyContent: "center",
    fontWeight: "600",
    fontSize: 28,
    letterSpacing: -0.5,
    marginTop: 15,
    color: "$white"
  }
});
