export interface Posts {
  _id: string;
  _createdAt: string;
  title: string;
  description: string;
  mainImage: {
    asset: {
      url: string;
    };
  };
  author: {
    name: string;
    image: string;
  };
  slug: {
    current: string;
  };
  body: [object];
}
