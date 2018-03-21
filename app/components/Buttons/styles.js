import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  container: {
    alignItems: "center"
  },
  text: {
      color:"$white",
      fontSize:14,
      fontWeight:"300",
      paddingVertical:20,
  },
  icon: {
      width:19,
      marginRight:11,
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center"
  }
});

export default styles;
