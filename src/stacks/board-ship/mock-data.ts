export type ShipAllowedAuthMethod = 'sms' | 'email';

export interface ShipOwner {
  handle: string;
  name: string;
}

export interface ShipRuleSection {
  title: string;
  paragraphs: string[];
}

export interface ShipBoardingDetails {
  domain: string;
  owner: ShipOwner;
  avatar: string;
  name: string;
  motto: string;
  description: string;
  rules: ShipRuleSection[];
  allowedAuthMethods: ShipAllowedAuthMethod[];
  numOrbs: number;
}

const MOCK_RULES: ShipRuleSection[] = [
  {
    title: 'Architecto Beatae',
    paragraphs: [
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo',
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    ],
  },
  {
    title: 'Doloremque',
    paragraphs: [
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo',
    ],
  },
  {
    title: 'Inventore Veritatis et Quasi',
    paragraphs: [
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo',
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    ],
  },
  {
    title: 'Perspiciatis',
    paragraphs: [
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo',
    ],
  },
  {
    title: 'Voluptatem',
    paragraphs: [
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo',
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    ],
  },
  {
    title: 'Dicta Sunt Explicabo',
    paragraphs: [
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo',
    ],
  },
];

export const NBZ: ShipBoardingDetails = {
  domain: 'tessarak.org',
  owner: {
    handle: 'thetessarakfoundation@tessarak.org',
    name: 'The Tessarak Foundation',
  },
  avatar: 'TBD',
  name: 'The Nebuchadnezzar',
  motto: "We're all in this together.",
  description:
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
  rules: MOCK_RULES,
  allowedAuthMethods: ['sms', 'email'],
  numOrbs: 1544,
};
