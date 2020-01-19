import React, {useContext, useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {NavigationStackProp} from 'react-navigation-stack';
import {AppServicesContext} from './App';

export interface FirstScreenProps {
  navigation: NavigationStackProp;
}

export const FirstScreen: React.FC<
  FirstScreenProps
> = (): React.ReactElement => {
  const [uuid, setUuid] = useState<string>('');

  const services = useContext(AppServicesContext);

  useEffect(() => {
    services.httpbin.uuid().then(setUuid);
  }, [services.httpbin]);

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>{uuid}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
