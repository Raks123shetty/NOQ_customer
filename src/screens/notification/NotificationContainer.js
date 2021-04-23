import React from 'react';
import NotificationComponent from './NotificationComponent';
function NotificationContainer(props) {
  const {navigation} = props;
  const tag = 'NotificationContainer.js';
  return <NotificationComponent navigation={navigation} tag={tag} />;
}
export default NotificationContainer;
