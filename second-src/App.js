import React, { useState } from 'react';
import { Text, View } from 'react-native';
import MyButton from './components/MyButton';
import MyButton2 from './components/MyButton2';

export default function App() {
  const f = (evt, txt) => {
    console.log(txt, evt);
  };
  const obj = {
    name: '홍길동',
    age: 30,
  };

  return (
    <View>
      <Text>Hello World~!</Text>
      <MyButton
        title="등록"
        b={obj}
        c="3"
        onclick={evt => {
          f(evt, '등록');
        }}
      />
      <MyButton
        title="수정"
        onclick={evt => {
          f(evt, '수정');
        }}
      />
      <MyButton
        onclick={evt => {
          f(evt, '삭제');
        }}
      />
      <MyButton2 />
    </View>
  );
}
