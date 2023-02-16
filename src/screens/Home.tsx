import React, {useState} from 'react';
import {styled} from 'nativewind';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {RadioButton, Text as PaperText} from 'react-native-paper';

// Tailwind CSS Components
const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);

const TextInputExample = ({onChangeText}: any) => {
  return (
    <SafeAreaView>
      <StyledTextInput
        onChangeText={onChangeText}
        className="text-red-500 text-end"
      />
    </SafeAreaView>
  );
};

const Home = () => {
  const [text, onChangeText] = useState('');
  const [value, setValue] = React.useState('first');

  return (
    <StyledView className="mt-10">
      <StyledView className="border-2 border-cyan-400">
        <StyledText className="text-center text-lg text-red-500">
          just red
        </StyledText>
      </StyledView>

      <TextInputExample onChangeText={onChangeText} />

      <TouchableOpacity onPress={() => console.log(text)}>
        <StyledText className="text-red-500">{text}</StyledText>
      </TouchableOpacity>

      <RadioButton.Group
        onValueChange={newValue => setValue(newValue)}
        value={value}>
        <StyledView style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{marginRight: 10}}>First</Text>
          <RadioButton value="first" />
        </StyledView>
        <StyledView style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{marginRight: 10}}>Second</Text>
          <RadioButton value="second" />
        </StyledView>
      </RadioButton.Group>
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
