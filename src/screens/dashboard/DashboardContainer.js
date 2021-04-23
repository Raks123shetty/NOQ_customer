import React, {useState} from 'react';
import DashboardComponent from './DashboardComponent';
import DashboardStyles from './DashboardStyles';
import {Image} from 'react-native';

function DashboardContainer(props) {
  const {navigation} = props;
  const tag = 'DashboardContainer.js';
  const [isLoading, setIsLoading] = useState(false);

  const DATA = [
    {
      id: 1,
      image: (
        <Image
          resizeMode={'contain'}
          style={DashboardStyles.itemImageContainer}
          source={require('../../assets/images/placeholder.jpg')}
        />
      ),
      title: 'Kids Rock Festival',
      date: '21 AUG',
      time: '04-30PM',
      type: 'Broadstairs',
      price: '7985.00',
      event: 'Music Festival',
    },
    {
      id: 2,
      image: (
        <Image
          resizeMode={'contain'}
          style={DashboardStyles.itemImageContainer}
          source={require('../../assets/images/placeholder.jpg')}
        />
      ),
      title: 'Kids Rock Festival',
      date: '21 AUG',
      time: '04-30PM',
      type: 'Broadstairs',
      price: '7985.00',
      event: 'Music Festival',
    },
    {
      id: 3,
      image: (
        <Image
          resizeMode={'contain'}
          style={DashboardStyles.itemImageContainer}
          source={require('../../assets/images/placeholder.jpg')}
        />
      ),
      title: 'Kids Rock Festival',
      date: '21 AUG',
      time: '04-30PM',
      type: 'Broadstairs',
      price: '7985.00',
      event: 'Music Festival',
    },
  ];

  const tabs = [
    {
      id: 0,
      label: 'Events',
    },
    {
      id: 1,
      label: 'Venues',
    },
  ];
  const [selectedTabId, isSelectedTabId] = useState(tabs[0].id);
  const [eventSearchTerm, setEventSearchTerm] = useState('');
  const [venueSearchTerm, setVenueSearchTerm] = useState('');
  const [searchInputText, setSearchInputText] = useState('');

  function handleTabChange(tabId) {
    isSelectedTabId(tabId);
  }

  return (
    <DashboardComponent
      navigation={navigation}
      tag={tag}
      data={DATA}
      tabs={tabs}
      handleTabChange={handleTabChange}
      isLoading={isLoading}
    />
  );
}
export default DashboardContainer;
