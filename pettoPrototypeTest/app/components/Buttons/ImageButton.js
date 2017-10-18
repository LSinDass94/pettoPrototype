import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, Button, TouchableOpacity } from 'react-native';

import styles from './styles';

const ImageButton = ({ onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={styles.wrapper}>
      <Image resizeMode="contain" style={styles.icon} />
    </View>
  </TouchableOpacity>
);

ImageButton.propTypes = {
  onPress: PropTypes.func,
};

export default ImageButton;
