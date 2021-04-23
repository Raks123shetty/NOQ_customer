import React from 'react';
import OrderComponent from './OrderComponent';
function OrderContainer(props) {
  const {navigation} = props;
  const tag = 'OrderContainer.js';
  return <OrderComponent navigation={navigation} tag={tag} />;
}
export default OrderContainer;
