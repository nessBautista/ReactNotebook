import React from 'react';   //Very important
import {View, Text} from 'react-native'; // {} Closures are for de-structuring things
//----This will render a single component
const App = () => {
  const text = "Hello";
  return (
    <Text>{text}</Text>     //This is call JSX: basically HTML syntax within javascript
  );
}

export default App;
