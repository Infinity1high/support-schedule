import React from 'react';

import {SafeAreaView, Text} from 'react-native';
import {connect} from 'react-redux';
import {withNavigation} from 'react-navigation';
import {loadUsers} from '../../store/actions.js';

const People = (props) => {
  console.log(props);
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text>People</Text>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  ...state.dataReducer,
});

const mapDispatchToProps = {
  loadUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(People);
