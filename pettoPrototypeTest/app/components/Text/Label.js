import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Label = ({ text }) => <Text style={styles.text}>{text}</Text>;

Label.propTypes = {
  text: PropTypes.string,
};

export default Label;
