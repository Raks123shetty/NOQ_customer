import React from 'react';
import TabsComponent from './TabsComponent';
function TabsContainer(props) {
  const {navigation} = props;
  const tag = 'TabsContainer.js';

  const [selectedTabId, isSelectedTabId] = 0;

  function handleChange(id) {
    isSelectedTabId(id);
    props.onChange(id);
  }
  return (
    <TabsComponent
      navigation={navigation}
      tag={tag}
      selectedTabId={selectedTabId}
      handleChange={handleChange}
    />
  );
}
export default TabsContainer;
