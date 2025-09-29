"use client";

import Image from "next/image";

interface TrendingItem {
  id: number;
  title: string;
  image: string;
  link: string;
}

const trendingItems: TrendingItem[] = [
  {
    id: 1,
    title: "THE STREETWEAR UPDATE",
    image: "/mens/men1.jpeg",
    link: "/trending/streetwear",
  },
  {
    id: 2,
    title: "NEW-SEASON SHIRTS",
    image: "/mens/men2.jpeg",
    link: "/trending/shirts",
  },
  {
    id: 3,
    title: "BRANDS TO KNOW",
    image: "/mens/men3.jpeg",
    link: "/trending/brands",
  },
  {
    id: 4,
    title: "NEW FROM AMI PARIS",
    image: "/mens/men4.jpeg",
    link: "/trending/ami-paris",
  },
];

const HotCategoriesComponent = () => {
  return (
    <section className="w-full bg-white py-16 ">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-center text-2xl md:text-3xl font-light text-black mb-12 tracking-wide">
          Trending now
        </h2>

        {/* Grid of trending items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {trendingItems.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <a href={item.link} className="block">
                {/* Image Container */}
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                {/* Title */}
                <h3 className="text-sm md:text-base font-medium text-black tracking-wide text-center hover:text-gray-500">
                  {item.title}
                </h3>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotCategoriesComponent;
