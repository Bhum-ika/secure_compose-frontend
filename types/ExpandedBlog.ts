type Desc = {
    para1: string;
    para2: string;
    para3: string;
};

export type ExpandedBlog = {
    id: number;
    title: string;
    authorImage: string;
    author: string;
    date: string;
    littleDesc: string;
    blogImage: string;
    desc: Desc;
    Tagbuttons: string[];
  };
  