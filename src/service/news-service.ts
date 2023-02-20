import axios from 'axios';
import { INews } from '../types/news.interface';
const newsApi = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/posts',
});

export const getNewsService = async () => {
  const { data } = await newsApi.get<INews[]>('');
  return data;
};

export const deleteNewservice = async (id: number) => {
  const { data } = await newsApi.delete(`/${id}`);
  console.log(data);

  return data;
};
