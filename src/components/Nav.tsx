import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

const Nav = () => {
  return (
    <NavigationContainer>
      <Text style={styles.red}>測試Navbar</Text>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  red: {
    color: 'red',
  },
});

export default Nav;
