import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      {/* <App /> */}
      <Text style={styles.red}>just red</Text>

      {/* button */}
      <TouchableOpacity onPress={() => console.log('hi')} style={styles.btn}>
        <Text style={{color: 'cyan'}}>hi</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  btn: {
    backgroundColor: 'red',
  },
  red: {
    color: 'red',
  },
});

export default Home;
