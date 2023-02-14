import React from 'react';
import {View} from 'react-native';
import Nav from './src/components/Nav';
import Home from './src/screens/Home';
import {styled} from 'nativewind';
// import HomeScreen from './src/screens/IconScreen';
const StyledView = styled(View);

const App = () => {
  return (
    <StyledView>
      <StyledText className="text-center text-red-500">just red</StyledText>
      <Nav />
      <Home />
    </StyledView>
  );
};
export default App;
