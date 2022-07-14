import React from 'react';
import { StyleSheet, Text } from 'react-native';


const ErrorMessage = ({ error, visible }) => {
  if (!error || !visible) {
    return null;
  }

  return <Text style={styles.errorText}>⚠️ {error}</Text>;
};

const styles = StyleSheet.create({
  errorText: {
    color: '#f00',
    fontSize: 16,
    margin: 10,
    fontWeight: '600'
  }
});

export default ErrorMessage;
