import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Screen1: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen 1</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});

export default Screen1;