import { Platform } from 'react-native';
const teeny = 2.5;
const tiny = teeny * 2;
const small = tiny * 2; //10
const regular = tiny * 3; //15
const large = regular * 2; //30
const extraLarge = large * 1.5;
const tabPadding = Platform.OS == 'ios' ? 70 : 90;

const METRIC_SIZES = {
  teeny,
  tiny,
  small,
  regular,
  large,
  extraLarge,
  tabPadding,
};

export default METRIC_SIZES;
