import React from 'react';
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native';

import styles from './styles';

const InputTextNormal = ({ borderRadius }) => (
  <View style={styles.container}>
    <TextInput
      borderRadius={borderRadius}
      style={styles.inputField}
      underlineColorAndroid="transparent"
    />
  </View>
);

InputTextNormal.propTypes = {
  borderRadius: PropTypes.number,
};

export default InputTextNormal;
