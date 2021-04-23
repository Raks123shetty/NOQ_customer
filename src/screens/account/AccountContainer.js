import React from 'react';
import {View, Text} from 'react-native';
import AccountComponent from './AccountComponent';
function AccountContainer(props) {
  const {navigation} = props;
  const tag = 'AccountContainer.js';
  return <AccountComponent navigation={navigation} tag={tag} />;
}
export default AccountContainer;
