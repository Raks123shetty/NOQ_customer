import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DashboardContainer from '../screens/dashboard/DashboardContainer';
import AccountContainer from '../screens/account/AccountContainer';
import NotificationContainer from '../screens/notification/NotificationContainer';
import OrderContainer from '../screens/orders/OrderContainer';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../themes/variables/colors';

const Tab = createBottomTabNavigator();
function BottomNavTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      tabBarOptions={{
        activeTintColor: colors.primaryColor,
        inactiveTintColor: colors.grey,
        activeBackgroundColor: colors.transparent,
        inactiveBackgroundColor: colors.white,
        style: {
          height: 61,
        },
        labelStyle: {
          paddingBottom: 6,
          fontSize: 13,
        },
      }}>
      <Tab.Screen
        name="Dashboard"
        component={DashboardContainer}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={colors.primaryColor} size={25} />
          ),
        }}
      />

      <Tab.Screen
        name="Orders"
        component={OrderContainer}
        options={{
          tabBarLabel: 'Orders',
          tabBarIcon: ({color, size}) => (
            <Icon name="shopping-cart" color={colors.primaryColor} size={25} />
          ),
        }}
      />

      <Tab.Screen
        name="Notification"
        component={NotificationContainer}
        options={{
          tabBarLabel: 'Notification',
          tabBarIcon: ({color, size}) => (
            <Icon name="bell" color={colors.primaryColor} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountContainer}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({color, size}) => (
            <Icon name="user" color={colors.primaryColor} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const Stack = createStackNavigator();

function NavigationStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="DashboardContainer"
        screenOptions={({route, navigation}) => ({
          gestureEnabled: true,
          cardOverlayEnabled: true,
        })}
        mode="modal"
        headerMode="none">
        {/* <Stack.Screen
          name="DashboardContainer"
          component={DashboardContainer}
        /> */}
        <Stack.Screen name="BottomNavTabs" component={BottomNavTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default NavigationStack;
