import React from 'react';
import PropTypes from 'prop-types';
import {Image, Text, View} from 'react-native';
import style from '../UserStory/style';
import UserProfileImage from '../UserProfileImage/UserProfileImage';

const UserStory = props => {
  return (
    <View style={style.storyContainer}>
      <UserProfileImage firstName={props.firstName} />
      <Text style={style.name}>{props.firstName}</Text>
    </View>
  );
};

UserStory.propTypes = {
  firstName: PropTypes.string.isRequired,
};

export default UserStory;
