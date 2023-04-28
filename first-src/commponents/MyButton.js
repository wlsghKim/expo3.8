import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

const MyButton = ({ title, a, b, c, onPress }) => {
  console.log(title, a, b, c);
  // const subject = title ?? '기본버튼';
  return (
    <TouchableOpacity
      style={{
        // flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: 'pink',
      }}
      onPress={onPress}
    >
      <Text style={{ fontSize: 24, margin: 5 }}>{title}</Text>
    </TouchableOpacity>
  );
};
//기본값 설정
// MyButton.defaultProps = {
//   title: '기본버튼',
// };

//기본값 설정, 타입, 필수 선택여부 설정
MyButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

export default MyButton;
