import { Pressable, Text } from 'react-native';
import React from 'react';

const EventButton = () => {
  const _onPressIn = () => console.log('PressIn !!!');
  const _onPressOut = () => console.log('PressOut !!!');
  const _onPress = () => console.log('Press !!!');
  const _onLongPress = () => console.log('Long Press !!!');
  return (
    <Pressable
      style={{
        backgroundColor: '#f1c40f',
        padding: 16,
        margin: 10,
        borderRadius: 8,
      }}
      onPressIn={_onPressIn}
      onLongPress={_onLongPress}
      onPressOut={_onPressOut}
      onPress={_onPress}
      delayLongPress={3000}
    >
      <Text style={{ color: 'white', fontSize: 24 }}>Press</Text>
    </Pressable>
  );
};
export default EventButton;
