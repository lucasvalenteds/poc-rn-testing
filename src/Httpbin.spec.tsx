import {HttpbinService, HttpbinServiceDefault, Payload} from './Httpbin';
import Axios, {AxiosInstance} from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';

const httpClient: AxiosInstance = Axios.create();
const mock: AxiosMockAdapter = new AxiosMockAdapter(httpClient);
const service: HttpbinService = new HttpbinServiceDefault(httpClient);

test('It return `uuid` property', async () => {
  mock
    .onGet('/uuid')
    .reply(200, {uuid: '5f750e7e-3af0-11ea-b2e3-ef8681aa323a'} as Payload);

  const uuid: string = await service.uuid();

  expect(uuid).toStrictEqual('5f750e7e-3af0-11ea-b2e3-ef8681aa323a');
});
