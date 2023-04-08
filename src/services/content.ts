export interface TkVideo {}
export interface TkBeam {}
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
    items: [{type: 'pic', id: 'abc', url: 'https://fakeimg.pl/400x400/'}],
  };
}
