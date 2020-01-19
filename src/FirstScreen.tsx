import React, {useContext, useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Button,
  StyleSheet,
} from 'react-native';
import {NavigationStackProp} from 'react-navigation-stack';
import {AppServicesContext} from './App';

export interface FirstScreenProps {
  navigation: NavigationStackProp;
}

export const FirstScreen: React.FC<
  FirstScreenProps
> = (): React.ReactElement => {
  const [uuid, setUuid] = useState<string>('');
  const [shouldFetch, setShouldFetch] = useState<boolean>(false);

  const services = useContext(AppServicesContext);

  useEffect(() => {
    if (shouldFetch) {
      services.httpbin.uuid().then(setUuid);
      setShouldFetch(false);
    }
  }, [shouldFetch, setShouldFetch, services.httpbin]);

  return (
    <SafeAreaView style={style.safeArea}>
      <ScrollView style={style.scrollView}>
        <Text style={style.headline}>
          Click on the button below to generate a new UUID. The app will call
          HTTPBin service to get the value.
        </Text>
        <View style={style.button}>
          <Button
            color={'#F48024'}
            title={'Generate'}
            onPress={() => setShouldFetch(true)}
          />
          <Text testID={'uuid'} style={style.uuid}>
            {uuid}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  safeArea: {
    backgroundColor: '#222222',
    width: '100%',
    height: '100%',
  },
  scrollView: {
    padding: 16,
  },
  headline: {
    width: '100%',
    textAlign: 'center',
    color: '#DDDDDD',
    fontSize: 16,
  },
  button: {
    marginTop: 16,
  },
  uuid: {
    width: '100%',
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 18,
    marginTop: 28,
  },
});
