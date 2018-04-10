import React, { Component } from "react";
import { ScrollView, StatusBar, Platform } from "react-native";
import PropTypes from "prop-types";

import Icon from "react-native-vector-icons/Ionicons";

import { ListItem, Separator } from "../components/List";

const ICON_PREFIX = Platform.OS === "ios" ? "ios" : "md";
const ICON_COLOR = "#868686";
const ICON_SIZE = 23;

class Options extends Component {
  static propTypes = {
    navigation: PropTypes.object
  };
  
  handleThemesPress = () => {
    this.props.navigation.navigate("Themes");
  };

  handleSitePress = () => {
    console.log("site press");
  };

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          text="Themes"
          onPress={this.handleThemesPress}
          customIcon={
            <Icon
              name={`${ICON_PREFIX}-arrow-forward`}
              color={ICON_COLOR}
              size={ICON_SIZE}
            />
          }
        />
        <Separator />
        <ListItem
          text="Fixr.io"
          onPress={this.handleSitePress}
          customIcon={
            <Icon
              name={`${ICON_PREFIX}-link`}
              color={ICON_COLOR}
              size={ICON_SIZE}
            />
          }
        />
        <Separator />
      </ScrollView>
    );
  }
}

export default Options;
