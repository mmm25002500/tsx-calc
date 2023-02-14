import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

const Nav = () => {
  return (
    <NavigationContainer>
      <Text style={styles.red}>just red</Text>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  red: {
    color: 'red',
  },
});

export default Nav;
