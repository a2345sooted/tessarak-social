import {API_ORIGIN, HTTP_PROTOCOL} from '@env';
import axios from 'axios';
const API = `${HTTP_PROTOCOL}://${API_ORIGIN}`;

export type DimensionName = string;
export interface DimensionContent {
  items: any[];
}

const dimMap: {[index: DimensionName]: DimensionContent} = {};

export async function getDimContent(dim: DimensionName): Promise<any[]> {
  const cached = dimMap[dim];
  if (cached) {
    console.log(`returning cached content for dim: ${dim}`);
    return cached.items;
  }
  console.log(`retrieving cached content for dim: ${dim}`);
  const response = await axios.get(`${API}/dimension/${dim}`);
  const items = response.data;
  dimMap[dim] = {items};
  return items;
}
