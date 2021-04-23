import colors from '../../variables/colors';

export default {
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
  },
  sectionHeader: {
    //  fontFamily: MEDIUM,
    fontSize: 18,
    color: colors.black,
    marginTop: 10,
    marginBottom: 5,
    paddingHorizontal: 10,
  },
  item: {
    marginHorizontal: 10,
    marginVertical: 4,
  },
  eventDetailsSection: {
    width: 140,
    shadowColor: colors.black,
    shadowOpacity: 0.3,
    shadowOffset: {width: 0, height: 0},
    borderRadius: 8,
    marginTop: 0,
    backgroundColor: colors.white,
    paddingHorizontal: 8,
    paddingVertical: 10,
    flex: 1,
  },
  itemPhoto: {
    width: 140,
    height: 130,
    borderRadius: 7,
  },
  itemText: {
    color: colors.grey,
    fontSize: 10,
    // fontFamily: REGULAR,
  },
  eventTitleText: {
    color: colors.grey,
    marginBottom: 5,
    fontSize: 11,
    // fontFamily: MEDIUM,
  },
};
