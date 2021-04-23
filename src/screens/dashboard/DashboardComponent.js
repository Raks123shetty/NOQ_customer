import {Container, Header, Body, Title, Left, Card} from 'native-base';
import React from 'react';
import {
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
} from 'react-native';
import colors from '../../themes/variables/colors';
import DashboardStyles from './DashboardStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import Metrics from '../../themes/variables/metrics';
import strings from '../../themes/variables/strings';
import TabsComponent from '../../themes/components/tabs/TabsComponent';
import EventStyles from '../../themes/components/events/EventStyles';

function DashboardComponent(props) {
  const {navigation, tag, data, tabs, handleTabChange, isLoading} = props;
  const renderItem = ({item}) => {
    return (
      <Card
        style={DashboardStyles.cardStyle}
        cardElevation={2}
        cardMaxElevation={2}
        cornerRadius={10}>
        <View>
          <Image
            // resizeMode={'contain'}
            style={DashboardStyles.itemImageContainer}
            source={require('../../assets/images/placeholder.jpg')}
          />
          <Text>{item.title}</Text>
          <Text style={DashboardStyles.detailStyle}>
            {item.date}-{item.time}
          </Text>
          <Text style={DashboardStyles.detailStyle}>
            {item.type}-{item.price}
          </Text>
          <Text style={DashboardStyles.detailStyle}>{item.event}</Text>
        </View>
      </Card>
    );
  };

  const renderItem2 = ({item}) => {
    return (
      <TouchableOpacity
      // onPress={() => {
      //   this.props.navigation.navigate("EventVendorList", {
      //     eventId: item.eventDetails._id,
      //     name: item.eventDetails.name,
      //     item: item.eventDetails,
      //   });
      // }}
      >
        <View style={EventStyles.item}>
          <Image
            source={require('../../assets/images/placeholder.jpg')}
            style={EventStyles.itemPhoto}
            // imageStyle={{width: 140, height: 130, borderTopLeftRadius: 8, borderTopRightRadius: 8, opacity: (sectionTitle === "Coming Soon" && !item.isAvailableForPreOrder ? 0.5 : 1)}}
            indicatorProps={{
              color: colors.purple_light,
            }}
            resizeMode={'cover'}
          />
          {/* <View style={EventStyles.eventDetailsSection}>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={EventStyles.eventTitleText}>
              {item.title}
            </Text>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={EventStyles.itemText}>
              {item.date}-{item.time}
            </Text>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={EventStyles.itemText}>
              {item.type}-{item.price}
            </Text>

            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={EventStyles.itemText}>
              {item.event}
            </Text>
          </View> */}

          <View style={DashboardStyles.eventDetailsSection}>
            <Text>{item.title}</Text>
            <Text style={DashboardStyles.detailStyle}>
              {item.date}-{item.time}
            </Text>
            <Text style={DashboardStyles.detailStyle}>
              {item.type}-{item.price}
            </Text>
            <Text style={DashboardStyles.detailStyle}>{item.event}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={DashboardStyles.container}>
      <View style={DashboardStyles.gradient}>
        <Image
          style={DashboardStyles.noqlogo}
          source={require('../../assets/images/noq_header_logo.png/')}
        />
        <View style={DashboardStyles.tabContainer}>
          <TabsComponent tabs={tabs} onChange={handleTabChange} />
        </View>
      </View>
      <View style={DashboardStyles.ContentView}>
        <View style={DashboardStyles.searchContainer}>
          <TextInput
            returnKeyType={'search'}
            placeholder={'Search'}
            // value={searchInputText}
            style={DashboardStyles.searchTextInput}
            // placeholderTextColor={SEARCH}
            // onChangeText={text => {
            //   this.setState({searchInputText: text});
            //   if (selectedTabId === 0) {
            //     this.setState({eventSearchTerm: text, venueSearchTerm: ''});
            //   } else {
            //     this.setState({venueSearchTerm: text, eventSearchTerm: ''});
            //   }
            // }}
          />
          <Image
            resizeMode={'contain'}
            style={DashboardStyles.searchImage}
            source={require('../../assets/images/ic_search.png')}
          />
        </View>

        <View>
          <Text style={DashboardStyles.eventHeaderStyle}>
            {strings.COMING_SOON}
          </Text>
        </View>

        <FlatList
          horizontal={true}
          data={data}
          renderItem={renderItem2}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}
export default DashboardComponent;
