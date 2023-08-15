import React from 'react';
import {Image, Text, View} from 'react-native';
import style from './style';
import PropTypes from 'prop-types';

const UserProfileImage = props => {
  return (
    <View style={style.userImageContainer}>
      <Image
        source={require('../../assets/images/default_profile.png')}
        resizeMode={'cover'}
      />
      <View style={style.initialLetterContainer}>
        <Text style={style.initialLetter}>{props.firstName.slice(0, 1)}</Text>
      </View>
    </View>
  );
};

UserProfileImage.propTypes = {
  firstName: PropTypes.string.isRequired,
};

export default UserProfileImage;
