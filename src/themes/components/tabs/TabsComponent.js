import React from 'react';
import {TouchableWithoutFeedback, Text, View} from 'react-native';
import DashboardStyles from '../../../screens/dashboard/DashboardStyles';
import colors from '../../variables/colors';
import TabsStyle from './TabsStyle';
function TabsComponent(props) {
  const {tabs, selectedTabId, handleChange} = props;

  return (
    <View style={TabsStyle.container}>
      {tabs.map(tab => {
        return (
          <TouchableWithoutFeedback
            key={tab.id}
            onPress={() => {
            //  handleChange(tab.id);
            }}
            style={[
              TabsStyle.button,
              {
                backgroundColor:
                  tab.id === selectedTabId ? colors.purple_light : null,
              },
            ]}>
            <Text
              style={[
                TabsStyle.label,
                {
                  color: tab.id === selectedTabId ? colors.white : colors.black,
                  //  fontFamily: tab.id === selectedTabId ? SEMI_BOLD : REGULAR,
                },
              ]}>
              {tab.label}
            </Text>
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );
}
export default TabsComponent;
