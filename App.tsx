import React from 'react';
import {View} from 'react-native';
import Nav from './src/components/Nav';
import Home from './src/screens/Home';
// import {styled} from 'nativewind';
// import {Text} from 'react-native/Libraries/Text/Text';
// import HomeScreen from './src/screens/IconScreen';
// const StyledView = styled(View);
// const StyledText = styled(Text);

const App = () => {
  return (
    <View>
      {/* <Text className="text-center text-red-500">just red</Text> */}
      <Nav />
      <Home />
    </View>
  );
};
export default App;
