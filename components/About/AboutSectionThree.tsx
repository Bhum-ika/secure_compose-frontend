import Image from "next/image";

const AboutSectionThree = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[570px]" data-wow-delay=".2s">
              <div className="mb-9">
                <p className="mb-4 text-2xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
                Why Secure-Compose for Your Business?
                </p>
                {/* <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Secure-Compose accelerates startups with a robust SBOM solution, 
                ensuring innovative ideas are built on a secure foundation for streamlined development.
                </p> */}
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Scalable Solutions
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Whether you&apos;re a growing startup or an established business, 
                Secure-Compose scales with you. Our solutions are adaptable to the evolving needs of your business.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Competitive Edge
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                In a competitive landscape, standing out is essential. Secure-Compose not only secures your 
                digital assets but also positions your business as a security-conscious and trustworthy partner.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
                data-wow-delay=".2s"
              >
               
                <Image
                  src="/images/about/abt4.png"
                  alt="about-image"
                  fill
                  className="drop-shadow-three mx-auto hidden max-w-full dark:block dark:drop-shadow-none lg:mr-0"
                />
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionThree;
