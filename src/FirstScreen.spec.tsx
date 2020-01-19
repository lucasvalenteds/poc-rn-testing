import React from 'react';
import ReactRenderer, {
  ReactTestRenderer,
  ReactTestInstance,
} from 'react-test-renderer';
import {AppServicesContext, AppServices} from './App';
import {FirstScreen} from './FirstScreen';
import {Button} from 'react-native';

const props: any = {};

test('It calls service after click', async () => {
  const context: AppServices = {
    httpbin: {
      uuid: async () => '75d78a08-3af4-11ea-854d-5bc48a09c670',
    },
  };
  const component: ReactTestRenderer = ReactRenderer.create(
    <AppServicesContext.Provider value={context}>
      <FirstScreen {...props} />
    </AppServicesContext.Provider>,
  );
  const button: ReactTestInstance = component.root.findByType(Button);
  const text: ReactTestInstance = component.root.findByProps({testID: 'uuid'});

  await ReactRenderer.act(async () => button.props.onPress());

  expect(text.props.children).toStrictEqual(
    '75d78a08-3af4-11ea-854d-5bc48a09c670',
  );
});
