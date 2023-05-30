import 'react-native-gesture-handler/jestSetup';


jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.mock('react-native-vision-camera', () => {
  return {
    Camera: {
      requestCameraPermission: () => 'authorized',
    },
    useCameraDevices: jest.fn()
  }
});
jest.mock('react-native-text-recognition', () => {
  return {};
});

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => {
      return {
        navigate: jest.fn(),
        goBack: jest.fn(),
      };
    },
  };
});