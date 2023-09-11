type BlogPost = {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  tags: string[];
  language: string;
};

type Project = {
  id: string;
  title: string;
  image: string;
  description: string;
  tags: string[];
  github: string | undefined;
  live: string | undefined;
};
