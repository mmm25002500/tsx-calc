import React from 'react';
import {View} from 'react-native';
import Nav from './src/components/Nav';
import Home from './src/screens/Home';
// import HomeScreen from './src/screens/IconScreen';

const App = () => {
  return (
    <View>
      <Nav />
      <Home />
    </View>
  );
};
export default App;
