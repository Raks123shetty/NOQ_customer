import colors from '../../themes/variables/colors';
import fontSize from '../../themes/variables/fontSize';
import Metrics from '../../themes/variables/metrics';
import {
  heightPercentageToDP,
  responsiveFontSize,
  responsiveHorizontalSize,
  responsiveVerticalSize,
  widthPercentageToDP,
} from '../../themes/variables/responsiveSize';
export default {
  headerStyle: {
    marginTop: responsiveVerticalSize(3),
    backgroundColor: colors.purple_dark,
  },
  headerTextStyle: {
    marginLeft: responsiveHorizontalSize(0),
  },
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
  },
  gradient: {
    backgroundColor: colors.header_background,
    // ...ifIphoneX(
    //   {
    //     height: 110,
    //   },
    //   {
    //     height: 90,
    //   }
    // ),
  },
  headerView: {
    flexDirection: 'row',
    width: Metrics.screenWidth,
    alignItems: 'center',
    height: Metrics.headerHeight,
    // ...ifIphoneX(
    //   {
    //     marginTop: 15,
    //   },
    //   {
    //     marginTop: 10,
    //   },
    // ),
  },
  ContentView: {
    marginTop: 20,
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 20,
    height: 42,
    marginHorizontal: 15,
    paddingHorizontal: 10,
    // ...Platform.select({
    //   ios: {
    //     paddingVertical: 10,
    //   },
    //   android: {
    //     paddingVertical: 0,
    //   },
    // }),
  },
  searchTextInput: {
    flex: 1,
    color: colors.black,
    //fontFamily: REGULAR,
    fontSize: 14,
  },

  searchImage: {
    width: 22,
    height: 22,
    alignSelf: 'center',
    alignItems: 'center',
  },
  itemImageContainer: {
    height: 150,
    borderRadius: 8,
    width: '90%',
    backgroundColor: 'transparent',
    zIndex: 1,
    marginTop: -8,
  },
  eventHeaderStyle: {
    marginLeft: responsiveHorizontalSize(5),
    fontSize: fontSize.textSize20,
    fontWeight: fontSize.fontBold,
  },
  cardStyle: {
    marginRight: responsiveHorizontalSize(1),
    marginLeft: responsiveHorizontalSize(2),
    backgroundColor: colors.white,
    paddingHorizontal: responsiveHorizontalSize(2),
    paddingVertical: responsiveVerticalSize(2),
    // justifyContent: 'center',
    // alignItems:'center',
    borderRadius: 7,
    height: heightPercentageToDP(33),
    width: widthPercentageToDP(45),
  },
  detailStyle: {
    fontSize: fontSize.textSize12,
    color: colors.grey,
  },
  noqlogo: {
    width: 70,
    height: 30,
    position: 'relative',
    left: 20,
    marginTop: 15,
    // ...ifIphoneX(
    //   {
    //     top: 40,
    //   },
    //   {
    //     top: 20,
    //   }
    // ),
  },
  tabContainer: {
    shadowColor: colors.black,
    shadowOpacity: 0.3,
    shadowOffset: {width: 0, height: 0},
    height: 60,
    marginHorizontal: 16,
    // ...ifIphoneX(
    //   {
    //     marginTop: 80,
    //   },
    //   {
    //     marginTop: 60,
    //   }
    // ),
    borderRadius: 12,
    backgroundColor: colors.white,
  },

  sectionContainer: {
    flex: 1,
  },
  eventDetailsSection: {
    width: 140,
    shadowColor: colors.black,
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 0 },
    borderRadius: 8,
    marginTop:0,
    backgroundColor: colors.white,
    paddingHorizontal: 8,
    paddingVertical: 10,
   // flex: 1,
  },  
};
