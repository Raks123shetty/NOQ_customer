import colors from '../../variables/colors';
import fontSize from '../../variables/fontSize';

export default {
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 1,
  },
  button: {
    paddingVertical: 4,
    paddingHorizontal: 24,
    justifyContent: 'center',
    borderRadius: 14,
  },
  label: {
    color: colors.grey,
    textAlign: 'center',
    fontSize: fontSize.textSize15,
  },
};
