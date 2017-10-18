import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  Image,
  TouchableOpacity,
  Alert,
  StyleSheet,
  ScrollView,
  View,
  TouchableHighlight,
} from 'react-native';
import geolib from 'geolib';

import styles from './styles';

class Previews2 extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
          distance: geolib.getDistance(
            position.coords,
            {
              latitude: 10.248,
              longitude: 123.726,
            },
            1,
            1,
          ),
        });
      },
      error => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }

  handlePressBaseCurrency = () => {
    console.log('press base');
    this.props.navigation.navigate('CurrencyList', { title: 'Base Currency' });
  };

  handlePressQuoteCurrency = () => {
    console.log('press quote');
    this.props.navigation.navigate('CurrencyList', { title: 'Quote Currency' });
  };

  handleTextChange = ({ text }) => {
    console.log('change text', text);
  };

  handleNextPreview = () => {
    console.log('press prev');
    this.props.navigation.navigate('Previews2');
  };

  render() {
    return (
      <ScrollView contentContainerStyle={StyleSheet.contentContainer}>
        <View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              padding: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image style={styles.iLogo} source={require('./images/white-bg.png')} />
            <TouchableOpacity onPress={() => this.handleNextPreview()}>
              <Image style={styles.iPic} source={require('./images/dog1.jpg')} />
            </TouchableOpacity>

            <View style={styles.vDetails}>
              <View style={styles.vPet}>
                <Text style={styles.nField}>Daisy, 1</Text>
                <Text style={styles.lField}>Askal</Text>
                <Text style={styles.lField}>{Math.round(this.state.distance / 1000)} kms away</Text>
              </View>
              <View style={styles.vInfo}>
                <TouchableHighlight
                  onPress={() => {
                    Alert.alert('info');
                  }}
                >
                  <View style={styles.vInfoButton}>
                    <Text style={styles.tInfo}>i</Text>
                  </View>
                </TouchableHighlight>
              </View>
            </View>
          </View>

          <View style={styles.vButtonHolder}>
            <View style={styles.bStyle}>
              <TouchableHighlight
                onPress={() => {
                  Alert.alert('not interested');
                }}
              >
                <Image style={styles.iSize} source={require('./images/x.png')} />
              </TouchableHighlight>
            </View>

            <View style={styles.bStyle}>
              <TouchableHighlight
                onPress={() => {
                  Alert.alert('rate');
                }}
              >
                <Image style={styles.iSize} source={require('./images/star.png')} />
              </TouchableHighlight>
            </View>

            <View style={styles.bStyle}>
              <TouchableHighlight
                onPress={() => {
                  Alert.alert('interested');
                }}
              >
                <Image style={styles.iSize} source={require('./images/heart.png')} />
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Previews2;
