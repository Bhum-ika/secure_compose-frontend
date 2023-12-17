// pages/blog/index.tsx
import Link from 'next/link';
import Data from '@/components/Blog/Data';
import SingleBlogDetail from './SingleBlogDetail';

const BlogPage = () => {
  return (
    <div>
      <h1>Blog Page</h1>
      <div className="-mx-4 flex flex-wrap justify-center">
            {Data.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlogDetail Data={blog} />
              </div>
            ))}
          </div>

    </div>
  );
};

export default BlogPage;
