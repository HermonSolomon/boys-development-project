export interface Posts {
  _id: string;
  _createdAt: string;
  title: string;
  description: string;
  comments: Comments[];
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

export interface Comments {
  approved: boolean;
  comment: string;
  email: string;
  name: string;
  post: {
    _ref: string;
    _type: string;
  };
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
}
