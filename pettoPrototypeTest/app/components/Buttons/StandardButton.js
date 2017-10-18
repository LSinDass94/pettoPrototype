import React from 'react';
import PropTypes from 'prop-types';
import { View, Button } from 'react-native';

import styles from './styles';

const StandardButton = ({ onPress, title, color }) => (
  <View style={styles.wrapper}>
    <Button color={color} title={title} onPress={onPress} style={styles.text} />
  </View>
);

StandardButton.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string,
  color: PropTypes.string,
};

export default StandardButton;
