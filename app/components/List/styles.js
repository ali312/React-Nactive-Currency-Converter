import { StyleSheet } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  $underlayColor: "$border",
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "$white"
  },
  text: {
    color: "$darkText",
    fontSize: 16
  },
  separator: {
    backgroundColor: "$border",
    height: StyleSheet.hairlineWidth,
    flex: 1,
    marginLeft: 20
  },
  icon: {
    backgroundColor: "transparent",
    borderRadius: 15,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  iconVisible: {
    backgroundColor: "$primaryBlue"
  },
  checkIcon: {
    width: 18
  }
});

export default styles;
