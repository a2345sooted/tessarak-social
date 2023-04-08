export interface TkVideo {
  type: 'video';
  url: string;
}
export interface TkBeam {
  type: 'beam';
  url: string;
}
export interface TkPic {
  type: 'pic';
  url: string;
}
export type FeedContentType = 'pic' | 'video' | 'beam';

export type FeedContent = (TkVideo | TkBeam | TkPic) & {
  id: string;
  type: FeedContentType;
};

export interface FeedContentResult {
  items: FeedContent[];
}

export async function getContent(): Promise<FeedContentResult> {
  return {
    items: [
      {type: 'pic', id: '1', url: 'https://fakeimg.pl/400x400/'},
      {type: 'pic', id: '2', url: 'https://fakeimg.pl/500x500/'},
      {type: 'video', id: '3', url: 'https://fakeimg.pl/500x500/'},
      {type: 'video', id: '4', url: 'https://fakeimg.pl/500x500/'},
      {type: 'beam', id: '5', url: 'https://fakeimg.pl/500x500/'},
      {type: 'beam', id: '6', url: 'https://fakeimg.pl/500x500/'},
    ],
  };
}

export interface DimensionMeta {
  id: string;
  name: string;
  description: string;
}

export async function getDimensions(): Promise<DimensionMeta[]> {
  return [
    {id: '1', name: 'Sports', description: 'a feed of sports stuff'},
    {id: '2', name: 'Cats in Space', description: 'a feed of cats in space.'},
    {
      id: '3',
      name: 'Manatees in Space',
      description: 'a feed of manatees in space',
    },
  ];
}
