import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  SectionList,
  FlatList,
} from 'react-native';
import EventStyles from './EventStyles';
function Events(props) {
  const {navigation} = props;
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


  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <SectionList
          contentContainerStyle={{paddingHorizontal: 10}}
          stickySectionHeadersEnabled={false}
           //sections={this.state.sections}
        //   onRefresh={this.props.onRefresh}
          refreshing={false}
          renderSectionHeader={({section}) => (
            <>
              <Text style={EventStyles.sectionHeader}>{section.title}</Text>
              <FlatList
                horizontal
                data={DATA}
                renderItem={({item}) => this.ListItem(item, section.title)}
                showsHorizontalScrollIndicator={false}
                onScrollEndDrag={() => {
                  this.props.onScrollEndDrag(section.title);
                }}
              />
            </>
          )}
          renderItem={() => {
            return null;
          }}
        />
      </SafeAreaView>
    </View>
  );
}
export default Events;
