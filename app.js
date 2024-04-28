import React from 'React';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <Text>How are you, fam?</Text>
      <View>
        <Text>We are learning React Native.</Text>
        <Image
          source = {{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style = {{ width: 200, height: 200}}
        />
      </View>
      <TextInput 
        style = {{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue = "You can type in me. :)"
      />
    </ScrollView>
  );
};

export default App;