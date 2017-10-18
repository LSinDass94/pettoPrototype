import { SQLite } from 'expo';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { KeyboardAvoidingView, ScrollView, Text } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputTextNormal } from '../components/TextInput';
import { SignUpButton, StandardButton } from '../components/Buttons';
import { Label } from '../components/Text';

const db = SQLite.openDatabase({ name: 'db.db' });

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      textToDisplay: '',
    };
  }

  componentDidMount() {
    db.transaction((tx) => {
      tx.executeSql(
        'create table if not exists user_login (id integer primary key not null, username text, password text);',
      );
    });
  }

  onButtonPressSignUp(user, pass) {
    // this.delete();
    db.transaction((tx) => {
      tx.executeSql(
        'select * from user_login where username = ? ',
        [user],
        (_, { rows: { length } }) => {
          console.log(JSON.stringify(length));
          if (length == 0) {
            tx.executeSql('insert into user_login (username, password) values (?, ?)', [
              user,
              pass,
            ]);
            this.setState({ textToDisplay: 'Sign up successful!' });
          } else {
            this.setState({ textToDisplay: 'Username already exists!' });
          }
        },
      );

      tx.executeSql(
        'select * from user_login',
        [],
        (_, { rows }) => console.log(JSON.stringify(rows)),
        null,
        null,
      );
    });
  }

  onButtonPressLogin(user, pass) {
    db.transaction((tx) => {
      tx.executeSql(
        'select * from user_login where username = ? and password = ?',
        [user, pass],
        (_, { rows: { length } }) => {
          console.log(JSON.stringify(length));
          console.log(length === 0 ? 'wrong credentials' : 'success');
          this.setState({ userExists: length });
          this.setState({
            textToDisplay: length === 0 ? 'Invalid username or password!' : 'Login successful!',
          });
        },
        null,
        null,
      );
    });
  }

  handlePressRegister = () => {
    console.log('press register');
    this.props.navigation.navigate('Register', { title: 'SIGN UP' });
  };

  handleTextChange = ({ text }) => {
    console.log('change text', text);
  };

  handleOptionsPress = () => {
    console.log('handle options press');
    this.props.navigation.navigate('Options');
  };

  handlePressCategories = () => {
    console.log('handle categories press');
    this.props.navigation.navigate('Categories', { title: 'CATEGORIES' });
  };

  render() {
    return (
      <ScrollView>
        <Container>
          <KeyboardAvoidingView behavior="padding">
            <Logo />
            <Label text="Username" onChangeText={text => this.setState({ username: text })} />
            <InputTextNormal borderWidth={2} borderRadius={50} keyboardType="default" />
            <Label text="Password" onChangeText={text => this.setState({ password: text })} />
            <InputTextNormal
              borderWidth={2}
              borderRadius={50}
              keyboardType="default"
              secureTextEntry
            />

            <StandardButton
              color="#3e1b00"
              title="Login to Petto"
              onPress={() => {
                this.onButtonPressSignUp(this.state.username, this.state.password);
              }}
            />

            <StandardButton
              color="#2553b3"
              title="Continue with Facebook"
              onPress={() => {
                this.onButtonPressLogin(this.state.username, this.state.password);
              }}
            />

            <Text>{this.state.textToDisplay}</Text>

            <SignUpButton text="Or sign up for FREE!" onPress={this.handlePressRegister} />
          </KeyboardAvoidingView>
        </Container>
      </ScrollView>
    );
  }
}

export default Home;
