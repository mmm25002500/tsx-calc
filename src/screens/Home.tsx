import React, {useState} from 'react';
import {styled} from 'nativewind';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

// Tailwind CSS Components
const StyledView = styled(View);
const StyledText = styled(Text);

const TextInputExample = ({onChangeText}: any) => {
  return (
    <SafeAreaView>
      <TextInput onChangeText={onChangeText} />
    </SafeAreaView>
  );
};

const Home = () => {
  const [text, onChangeText] = useState('');

  return (
    <StyledView className="mt-10">
      <StyledText className="text-center text-red-500">just red</StyledText>

      <TextInputExample onChangeText={onChangeText} />

      <TouchableOpacity onPress={() => console.log(text)}>
        <Text style={{color: 'cyan'}}>{text}</Text>
      </TouchableOpacity>
    </StyledView>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 50,
//   },
//   btn: {
//     backgroundColor: 'red',
//   },
//   red: {
//     color: 'red',
//   },
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//   },
// });

export default Home;
