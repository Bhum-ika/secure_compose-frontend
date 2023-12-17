import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";
import { Metadata } from "next";
import { singleBlogDetails } from "@/types/singleBlogDetails";

export const metadata: Metadata = {
  title: "Blog Details Page | Free Next.js Template for Startup and SaaS",
  description: "This is Blog Details Page for Startup Nextjs Template",
  // other metadata
};

const SingleBlogDetail = ({ Data }: { Data: singleBlogDetails }) => {
  const {title,authorImage,author,date,littleDesc,blogImage,desc,Tagbuttons} = Data;
  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">

              <div className="w-full px-4 lg:w-8/12">
                <div>
                  <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                   lorem
                  </h2>
                  <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                    <div className="flex flex-wrap items-center">
                      <div className="mb-5 mr-10 flex items-center">
                        <div className="mr-4">
                          <div className="relative h-10 w-10 overflow-hidden rounded-full">
                            <Image
                              src={authorImage}
                              alt="author"
                              fill
                            />
                          </div>
                        </div>
                        <div className="w-full">
                          <span className="mb-1 text-base font-medium text-body-color">
                            By <span>{author}</span>
                          </span>
                        </div>
                      </div>
                      {/* Other author information */}
                    </div>
                    <div className="mb-5">
                      {Tagbuttons.map((tag, index) => (
                        <TagButton key={index} text={tag} />
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                      {littleDesc}
                    </p>
                    <div className="mb-10 w-full overflow-hidden rounded">
                      <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                        <Image
                          src={blogImage}
                          alt="image"
                          fill
                          className="object-cover object-center"
                        />
                      </div>
                    </div>
                    <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                      {desc.para1}
                      <br />
                      {desc.para2}
                      <br />
                      {desc.para3}
                      <br />
                    </p>
                  </div>
                </div>
              </div>
          
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlogDetail;
