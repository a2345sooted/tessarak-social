import {MOCK_PORTRAIT_VIDEOS} from './mock-videos';
import { MOCK_DIMENSIONS } from './mock-dimensions';

export interface TkVideo {
  id: string;
  type: 'video';
  title: string;
  thumbnailUrl: string;
  duration: string;
  uploadTime: string;
  views: string;
  author: string;
  videoUrl: string;
  description: string;
  subscriber: string;
  isLive: boolean;
}
export interface TkBeam {
  type: 'beam';
  url: string;
}
export interface TkPic {
  type: 'pic';
  url: string;
}
export type TkContentType = 'pic' | 'video' | 'beam';

export type TkContent = (TkVideo | TkBeam | TkPic) & {
  id: string;
  type: TkContentType;
};

export interface FeedContentResult {
  items: TkContent[];
}

export async function getContent(): Promise<FeedContentResult> {
  // return {
  //   items: [
  //     {type: 'pic', id: '1', url: 'https://fakeimg.pl/400x400/'},
  //     {type: 'pic', id: '2', url: 'https://fakeimg.pl/500x500/'},
  //     // {type: 'video', id: '3', url: 'https://fakeimg.pl/500x500/'},
  //     // {type: 'video', id: '4', url: 'https://fakeimg.pl/500x500/'},
  //     {type: 'beam', id: '5', url: 'https://fakeimg.pl/500x500/'},
  //     {type: 'beam', id: '6', url: 'https://fakeimg.pl/500x500/'},
  //   ],
  // };
  return {
    items: MOCK_PORTRAIT_VIDEOS,
  };
}

export interface DimensionMeta {
  id: string;
  name: string;
  description: string;
}

export async function getDimensions(): Promise<DimensionMeta[]> {
  return MOCK_DIMENSIONS;
}
