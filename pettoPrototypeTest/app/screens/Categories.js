import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StatusBar,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
  ScrollView,
  TouchableHighlight,
} from 'react-native';

import { Container } from '../components/Container';
import { ClearButton, ImageButton } from '../components/Buttons';
import { Header } from '../components/Header';
import { Label } from '../components/Text';

import styles from './styles';

class Categories extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  handleNextPreview = () => {
    console.log('press prev');
    this.props.navigation.navigate('Previews');
  };

  render() {
    return (
      <ScrollView>
        <Container>
          <Label text="Categories" />
          <TouchableOpacity style={styles.touchableHolder} onPress={() => this.handleNextPreview()}>
            <Image style={styles.iIcon} resizeMode="contain" source={require('./images/dog.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchableHolder} onPress={() => this.handleNextPreview()}>
            <Image style={styles.iIcon} resizeMode="contain" source={require('./images/cat.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchableHolder} onPress={() => this.handleNextPreview()}>
            <Image
              style={styles.iIcon}
              resizeMode="contain"
              source={require('./images/chicken.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchableHolder} onPress={() => this.handleNextPreview()}>
            <Image
              style={styles.iIcon}
              resizeMode="contain"
              source={require('./images/tiger.png')}
            />
          </TouchableOpacity>
        </Container>
      </ScrollView>
    );
  }
}

export default Categories;
