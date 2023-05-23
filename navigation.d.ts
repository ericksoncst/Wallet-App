import { RootStackParamList } from './src/routes/root.routes';

declare global {
  namespace ReactNavigation {
    type RootParamList = RootStackParamList
  }
}