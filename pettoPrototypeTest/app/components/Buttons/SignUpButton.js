import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Text } from 'react-native';

import styles from './styles';

const SignUpButton = ({ text, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.wrapper}>
      <Text style={styles.signUpText}>{text}</Text>
    </View>
  </TouchableOpacity>
);

SignUpButton.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
};

export default SignUpButton;
