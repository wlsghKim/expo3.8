import React from 'react';
import { Pressable, Text } from 'react-native';
import PropTypes from 'prop-types';

const MyButton = ({ title, b, c, onclick }) => {
  console.log(title, b, c);
  return (
    <Pressable onPressIn={onclick}>
      <Text>{title}</Text>
    </Pressable>
  );
};

//기본값 설정
MyButton.defaultProps = {
  title: '기본버튼',
};

//타입 필수여부
MyButton.prototype = {
  title: PropTypes.string.isRequired,
  b: PropTypes.object,
  onclick: PropTypes.func.isRequired,
};

export default MyButton;
