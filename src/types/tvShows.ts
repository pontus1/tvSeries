export type Schedule = {
  time: string;
  days: Array<string>;
};

export type Ratings = {
  average: number | null;
};

export type Country = {
  name: string;
  code: string;
  timezone: string;
};

export type Network = {
  id: number;
  name: string;
  country: Country;
};

export type Externals = {
  tvrage: number | null;
  thetvdb: number | null;
  imdb: string | null;
};

export type Image = {
  medium: string;
  original: string;
} | null;

export type Links = {
  self?: {
    href: string;
  };
  previousepisode?: {
    href: string;
  };
  show?: {
    href: string;
  };
  character?: {
    href: string;
  };
};

export type TvShow = {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: Array<string>;
  status: string;
  runtime: number | null;
  premiered: string | null;
  officialSite: string | null;
  schedule: Schedule;
  rating: Ratings;
  weight: number;
  network: Network;
  webChannel: string | null;
  externals: Externals;
  image: Image;
  summary: string;
  updated: number;
  _links: Links;
};

export type TvShowSearch = {
  score: number;
  show: TvShow;
};
