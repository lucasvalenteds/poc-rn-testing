import {AxiosInstance, AxiosResponse} from 'axios';

export interface Payload {
  uuid: string;
}

export interface HttpbinService {
  uuid(): Promise<string>;
}

export class HttpbinServiceDefault implements HttpbinService {
  public constructor(private httpClient: AxiosInstance) {}

  async uuid(): Promise<string> {
    const response: AxiosResponse<Payload> = await this.httpClient.get('/uuid');

    return response.data.uuid;
  }
}
