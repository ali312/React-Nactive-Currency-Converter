import React, { Component } from "react";
import { FlatList, StatusBar, View } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { ListItem, Separator } from "../components/List";
import currencies from "../data/currencies";

import { changeBaseCurrency, changeQuoteCurrency } from "../actions/currencies";

class CurrencyList extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    baseCurrency: PropTypes.string,
    quoteCurrency: PropTypes.string
  };

  handlePress = currency => {
    const { type } = this.props.navigation.state.params;
    if (type === "base") {
      this.props.dispatch(changeBaseCurrency(currency));
    } else {
      this.props.dispatch(changeQuoteCurrency(currency));
    }

    this.props.navigation.goBack(null);
  };

  render() {
    let comparisonCurrency = this.props.baseCurrency;
    if (this.props.navigation.state.params.type === "quote") {
      comparisonCurrency = this.props.quoteCurrency;
    }

    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent={false} barStyle="light-content" />
        <FlatList
          data={currencies}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={item === comparisonCurrency}
              onPress={() => this.handlePress(item)}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    baseCurrency: state.currencies.baseCurrency,
    quoteCurrency: state.currencies.quoteCurrency
  };
};

export default connect(mapStateToProps)(CurrencyList);
