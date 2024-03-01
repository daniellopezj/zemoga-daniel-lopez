export interface Votes{
  positive: number;
  negative: number;
}

export interface Celebrity {
  id: string;
  name: string;
  description: string;
  category: string;
  picture: string;
  lastUpdated: string;
  votes: Votes;
}