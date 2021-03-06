import React, { Component } from "react";
import { ScrollView, StatusBar } from "react-native";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import EStyleSheet from "react-native-extended-stylesheet";

import { ListItem, Separator } from "../components/List";

import { changePrimaryColor } from "../actions/theme";

const styles = EStyleSheet.create({
  $blue: "$primaryBlue",
  $green: "$primaryGreen",
  $orange: "$primaryOrange",
  $purple: "$primaryPurple"
});

class Themes extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func
  };

  handlePressTheme = color => {
    this.props.dispatch(changePrimaryColor(color));
    this.props.navigation.goBack(null);
  };

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          text="Blue"
          onPress={() => this.handlePressTheme(styles.$blue)}
          selected={true}
          checkmark={false}
          iconBackground={styles.$blue}
        />
        <Separator />
        <ListItem
          text="Orange"
          onPress={() => this.handlePressTheme(styles.$orange)}
          selected={true}
          checkmark={false}
          iconBackground={styles.$orange}
        />
        <Separator />
        <ListItem
          text="Green"
          onPress={() => this.handlePressTheme(styles.$green)}
          selected={true}
          checkmark={false}
          iconBackground={styles.$green}
        />
        <Separator />
        <ListItem
          text="Purple"
          onPress={() => this.handlePressTheme(styles.$purple)}
          selected={true}
          checkmark={false}
          iconBackground={styles.$purple}
        />
        <Separator />
      </ScrollView>
    );
  }
}

export default connect()(Themes);
