import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from '../Styles/Styles';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Home Screen!</Text>
    </View>
  );
};
export default HomeScreen;
