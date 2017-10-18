import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StatusBar, KeyboardAvoidingView, ScrollView, View } from 'react-native';

import { Container } from '../components/Container';
import { InputTextNormal } from '../components/TextInput';
import { Label } from '../components/Text';
import { Header } from '../components/Header';
import { StandardButton } from '../components/Buttons/';

class Register extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  handlePressRegister = () => {
    console.log('press register');
    this.props.navigation.navigate('Categories');
  };

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onPress={this.handleOptionsPress} />
        <KeyboardAvoidingView behavior="padding">
          <ScrollView>
            <Label text="FIRST NAME" />
            <InputTextNormal onChangeText={this.handleTextChange} />
            <Label text="LAST NAME" />
            <InputTextNormal onChangeText={this.handleTextChange} />
            <Label text="EMAIL" />
            <InputTextNormal onChangeText={this.handleTextChange} />
            <Label text="ADDRESS" />
            <InputTextNormal onChangeText={this.handleTextChange} />
            <Label text="USERNAME" />
            <InputTextNormal onChangeText={this.handleTextChange} />
            <Label text="PASSWORD" />
            <InputTextNormal onChangeText={this.handleTextChange} />
            <Label text="CONFIRM PASSWORD" />
            <InputTextNormal onChangeText={this.handleTextChange} />
            <StandardButton color="#653101" title="CONFIRM" onPress={this.handlePressRegister} />
          </ScrollView>
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default Register;
