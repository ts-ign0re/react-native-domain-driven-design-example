import * as axios from 'axios';

export class DataSourceInfrastructureImpl {
  client: axios.AxiosInstance;
  constructor(token: string) {
    this.client = axios.default.create({
      baseURL: 'https://sportscore1.p.rapidapi.com',
      headers: {
        'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com',
        'X-RapidAPI-Key': token,
      }
    });
  }

  public async get<T>(url: string): Promise<T> {
    const reponse = await this.client.get(url)
    return reponse.data;
  }
}

export const DataSourceInfrastructure = new DataSourceInfrastructureImpl('RAPIDAPI_KEY');