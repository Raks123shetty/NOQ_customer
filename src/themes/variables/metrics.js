import { Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");
const deviceWidth = width < height ? width : height;
const deviceHeight = width < height ? height : width;
const {
  widthScreen: viewportWidth,
  heightScreen: viewportHeight,
} = Dimensions.get("window");

const Metrics = {
  deviceWidth,
  deviceHeight,
  screenWidth: width,
  screenHeight: height,

  standardMargin: deviceWidth / 20,
  baseMargin: deviceWidth / 30,
  doubleBaseMargin: deviceWidth / 15,
  smallMargin: deviceWidth / 60,
  borderRadius: 8,

  standardPadding: deviceWidth / 20,
  basePadding: deviceWidth / 30,
  doubleBasePadding: deviceWidth / 15,
  smallPadding: deviceWidth / 60,

  navBarHeight: Platform.OS === "ios" ? 70 : 50,
  radius: 5,
  buttonHeight1: 47,
  buttonHeight: 50,
  inputHeight: 50,

  paddingTop: Platform.OS === "ios" ? (width === 896 ? 44 : 20) : 0,
  headerHeight: Platform.OS === "ios" ? (height === 896 ? 100 : 74) : 65,
  paddingBottom: Platform.OS === "ios" ? 0 : 50,
  scrollDistance: 250,
  minHeightHeader: 60,
  maxHeightHeader: deviceHeight * 0.5,
  buttonBorderRadius: 6,
};

export default Metrics;
