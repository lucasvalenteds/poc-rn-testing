import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import {createAppContainer, NavigationContainer} from 'react-navigation';
import {
  createStackNavigator,
  NavigationStackProp,
} from 'react-navigation-stack';

export interface FirstScreenProps {
  navigation: NavigationStackProp;
}

const FirstScreen: React.FC<FirstScreenProps> = (props): React.ReactElement => (
  <SafeAreaView>
    <ScrollView>
      <View>
        <TouchableWithoutFeedback
          onPress={() =>
            props.navigation.push('Second', {message: 'Hello World'})
          }>
          <Text style={{color: 'blue', fontSize: 40}}>First</Text>
        </TouchableWithoutFeedback>
      </View>
    </ScrollView>
  </SafeAreaView>
);

export interface SecondScreenProps {
  navigation: NavigationStackProp;
}

const SecondScreen: React.FC<SecondScreenProps> = (
  props,
): React.ReactElement => (
  <SafeAreaView>
    <ScrollView>
      <View>
        <TouchableWithoutFeedback onPress={() => props.navigation.goBack()}>
          <Text style={{color: 'red', fontSize: 40}}>
            {props.navigation.getParam('message', '')}
          </Text>
        </TouchableWithoutFeedback>
      </View>
    </ScrollView>
  </SafeAreaView>
);

const App: React.FC = (): React.ReactElement => {
  const Router: NavigationContainer = createAppContainer(
    createStackNavigator(
      {
        First: FirstScreen,
        Second: SecondScreen,
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
