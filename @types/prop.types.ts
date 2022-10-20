interface iconProps {
  icon: JSX.Element;
  url: string;
}

interface linkProps {
  text: string;
  url: string;
}

export interface IMiniCard {
  _id: string;
  title: string;
  shortDescription: string;
  slug?: {
    current?: string;
  };
  author?: {
    name?: string;
  };
  publishedAt: string;
  demoUrl: string;
  repository: string;
  tag: { [key: string]: any };
  mainImage: () => void | string;
}

export type { iconProps, linkProps };
