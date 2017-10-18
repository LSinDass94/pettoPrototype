import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
  Alert,
  ScrollView,
} from 'react-native';

import styles from './styles';

const Preview = ({ onPress, name, age, distance }) => (
  <ScrollView contentContainerStyle={StyleSheet.contentContainerStyle}>
    <View style={styles.overAll}>
      <View>
        <Image style={styles.iLogo} source={require('./images/white-bg.png')} />
        <TouchableOpacity onPress={onPress}>
          <Image style={styles.iPic} source={require('./images/dog1.jpg')} />
        </TouchableOpacity>

        <View style={styles.vDetails}>
          <View style={styles.vPet}>
            <Text style={styles.nField}>{name}</Text>
            <Text style={styles.lField}>{age}</Text>
            <Text style={styles.lField}>{distance}</Text>
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

Preview.propTypes = {
  onPress: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.string,
  distance: PropTypes.number,
};

export default Preview;
