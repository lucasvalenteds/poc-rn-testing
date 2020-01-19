import React, {createContext} from 'react';
import * as ReactNavigation from 'react-navigation';
import * as ReactStack from 'react-navigation-stack';
import Axios from 'axios';

import {HttpbinService, HttpbinServiceDefault} from './Httpbin';
import {FirstScreen} from './FirstScreen';

export interface AppServices {
  httpbin: HttpbinService;
}

export const AppServicesContext = createContext<AppServices>({
  httpbin: new HttpbinServiceDefault(
    Axios.create({
      baseURL: 'https://httpbin.org/',
    }),
  ),
});

const App: React.FC = (): React.ReactElement => {
  const Router: ReactNavigation.NavigationContainer = ReactNavigation.createAppContainer(
    ReactStack.createStackNavigator(
      {
        First: FirstScreen,
      },
      {
        initialRouteName: 'First',
        headerMode: 'none',
        defaultNavigationOptions: {
          animationEnabled: false,
        },
      },
    ),
  );

  return <Router />;
};

export default App;
