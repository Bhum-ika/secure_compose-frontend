import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";

const Brands = () => {
  return (
    <section className="pt-16">
      <div className="container">
        <div className="-mx-3 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp bg-[#fdfdfc] dark:bg-[#53576a] flex flex-wrap items-center justify-center rounded-sm px-8 py-8 sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]"
              data-wow-delay=".1s"
            >
              {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { image, name } = brand;

  return (
    <div className="mx-1 flex w-full max-w-[160px] items-center justify-center py-[5px] sm:mx-4 lg:max-w-[130px] xl:mx-6 xl:max-w-[150px] 2xl:mx-8 2xl:max-w-[160px]">
      <a
        rel="nofollow noreferrer"
        className="relative h-12 w-full opacity-70 transition "
      >
        <Image src={image} alt={name} fill />
      </a>
    </div>
  );
};
