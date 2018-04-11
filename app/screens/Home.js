import React, { Component } from "react";
import { StatusBar, KeyboardAvoidingView } from "react-native";
import PropTypes from "prop-types";

import { Container } from "../components/Container";
import { Logo } from "../components/Logo";
import { InputWithButton } from "../components/TextInput";
import { ClearButton } from "../components/Buttons";
import { LastConverted } from "../components/Text";
import { Header } from "../components/Header";

import { swapCurrency, changeCurrencyAmount } from "../actions/currencies";

const TEMP_BASE_CURRENCY = "USD";
const TEMP_QUOTE_CURRENCY = "GBP";
const TEMP_BASE_PRICE = "100";
const TEMP_QUOTE_PRICE = "79.74";
const TEMP_CONVERSION_RATE = 0.7974;
const TEMP_CONVERSION_DATE = new Date();

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object
  };

  handleChangeText = (amount) => {
    console.log(changeCurrencyAmount(amount));
    //TODO
    //this.props.dispatch(changeCurrencyAmount(amount));
  };

  handleOptionsPress = () => {
    this.props.navigation.navigate("Options");
  };

  handleSwapCurrency = () => {
    console.log(swapCurrency());
    //TODO
    //this.props.dispatch(swapCurrency());
  };

  handlePressBaseCurrency = () => {
    this.props.navigation.navigate("CurrencyList", { title: "Base Currency" });
  };

  handlePressQuoteCurrency = () => {
    this.props.navigation.navigate("CurrencyList", { title: "Quote Currency" });
  };

  render() {
    return (
      <Container>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Header onPress={this.handleOptionsPress} />
        <KeyboardAvoidingView behavior="padding">
          <Logo />
          <InputWithButton
            buttonText={TEMP_BASE_CURRENCY}
            onPress={this.handlePressBaseCurrency}
            defaultValue={TEMP_BASE_PRICE}
            keyboardType="numeric"
            onChangeText={this.handleChangeText}
          />
          <InputWithButton
            editable={false}
            buttonText={TEMP_QUOTE_CURRENCY}
            onPress={this.handlePressQuoteCurrency}
            value={TEMP_QUOTE_PRICE}
          />
          <LastConverted
            base={TEMP_BASE_CURRENCY}
            quote={TEMP_QUOTE_CURRENCY}
            conversionRate={TEMP_CONVERSION_RATE}
            date={TEMP_CONVERSION_DATE}
          />
          <ClearButton
            text="Reverse Currencies"
            onPress={this.handleSwapCurrency}
          />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default Home;
